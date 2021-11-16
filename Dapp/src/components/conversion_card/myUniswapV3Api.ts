import { FeeAmount, Pool } from "@uniswap/v3-sdk/";
import { ethers } from "ethers";
import { Token } from "@uniswap/sdk-core";
import { ChainId, JSBI } from "@uniswap/sdk";
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";

interface Immutables {
    factory: string;
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
    maxLiquidityPerTick: ethers.BigNumber;
}

interface State {
    liquidity: ethers.BigNumber;
    sqrtPriceX96: ethers.BigNumber;
    tick: number;
    observationIndex: number;
    observationCardinality: number;
    observationCardinalityNext: number;
    feeProtocol: number;
    unlocked: boolean;
}

async function getPoolImmutables(poolContract: ethers.Contract) {
    const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] = await Promise.all([
        poolContract.factory(),
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee(),
        poolContract.tickSpacing(),
        poolContract.maxLiquidityPerTick(),
    ]);

    const immutables: Immutables = {
        factory,
        token0,
        token1,
        fee,
        tickSpacing,
        maxLiquidityPerTick,
    };
    return immutables;
}

async function getPoolState(poolContract: ethers.Contract) {
    const [liquidity, slot] = await Promise.all([poolContract.liquidity(), poolContract.slot0()]);

    const PoolState: State = {
        liquidity,
        sqrtPriceX96: slot[0],
        tick: slot[1],
        observationIndex: slot[2],
        observationCardinality: slot[3],
        observationCardinalityNext: slot[4],
        feeProtocol: slot[5],
        unlocked: slot[6],
    };

    return PoolState;
}

function createPool(TokenA: Token, TokenB: Token, immutables: Immutables, state: State) {
    const poolExample = new Pool(
        TokenA,
        TokenB,
        immutables.fee,
        state.sqrtPriceX96.toString(),
        state.liquidity.toString(),
        state.tick
    );
    return poolExample;
}

export async function getPoolPrices(
    amountOut: number,
    type: string,
    chainId: ChainId,
    IUniswapV3PoolABI: ethers.ContractInterface,
    isFromInput: boolean,
    signerOrProvider?: ethers.Signer | ethers.providers.Provider
) {
    // const TokenA = new Token(
    //     chainId,
    //     "0xA5Ef74068d04ba0809B7379dD76Af5Ce34Ab7C57",
    //     18,
    //     "LUCHOW",
    //     "LunaChow"
    // );
    // const TokenB = new Token(
    //     chainId,
    //     "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    //     18,
    //     "WETH",
    //     "Wrapped Ether"
    // );
    var TokenA;
    var TokenB;
    const LUCHOW = new Token(
        chainId,
        "0xA5Ef74068d04ba0809B7379dD76Af5Ce34Ab7C57",
        18,
        "LUCHOW",
        "LunaChow"
    );
    const WETH = new Token(
        chainId,
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        18,
        "WETH",
        "Wrapped Ether"
    );

    switch (type) {
        case "0":
            TokenA = LUCHOW;
            TokenB = WETH;
            break;

        case "1":
            TokenA = WETH;
            TokenB = LUCHOW;
            break;

        default:
            return 0;
    }

    const poolAdd = Pool.getAddress(TokenA, TokenB, FeeAmount.MEDIUM);

    const poolContract = new ethers.Contract(poolAdd, IUniswapV3PoolABI, signerOrProvider);

    const [immutables, state] = await Promise.all([
        getPoolImmutables(poolContract),
        getPoolState(poolContract),
    ]);

    const pool = createPool(TokenA, TokenB, immutables, state);

    const [price, reversePrice] = await getPrices(pool, poolContract);
    console.log("ETH-LUCHOW: ", price);
    console.log("LUCHOW-ETH: ", reversePrice);

    const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
    const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, signerOrProvider);

    if (isFromInput) {
        try {
            const result = await quoterContract.callStatic.quoteExactInputSingle(
                TokenA.address,
                TokenB.address,
                immutables.fee,
                amountOut.toString(),
                0
            );
            console.log(TokenA.address, result.toString());
            return result / 1e18;
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const result = await quoterContract.callStatic.quoteExactOutputSingle(
                TokenA.address,
                TokenB.address,
                immutables.fee,
                amountOut.toString(),
                0
            );
            console.log(TokenA.address, result.toString());
            return result / 1e18;
        } catch (error) {
            console.log(error);
        }
    }
}

async function getPrices(pool: Pool, poolContract: ethers.Contract) {
    const tickSpacing = pool.tickSpacing;
    const [_, observations] = await poolContract.observe([0, pool.tickSpacing]);
    const priceExponent = (observations[0] - observations[1]) / tickSpacing;
    const price = 1.00001 ^ priceExponent;
    const reversePrice = 1 / price;

    return [price, reversePrice];
}

function getToken1PriceFromPoolFraction(pool: Pool) {
    return JSBI.toNumber(pool.sqrtRatioX96) ** 2 / 2 ** 192;
}

function getToken0PriceFromPoolFraction(pool: Pool) {
    return 2 ** 192 / JSBI.toNumber(pool.sqrtRatioX96) ** 2;
}
