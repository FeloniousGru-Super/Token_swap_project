import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { MdCopyAll } from "react-icons/md";
import pattern from "../../assets/bg_pattern_1.png";
import unicorn from "./static/unicorn.png";
import cat from "./static/cat.png";
import unicorn_2 from "./static/unicorn_2.png";
import drum from "./static/drum.png";
import dragon from "./static/dragon.png";
import experiment from "./static/experiment.png";
import What from "./components/what";
import Tokenomics from "./components/tokenomics";
import Fair from "./components/fair";
import Upcoming from "./components/upcoming";
import Roadmap from "./components/roadmap";
import AsSeen from "./components/as_seen";
import CoreValues from "./components/core_values";
import Featured from "./components/featured";
import FAQ from "./components/faq";
import ContactUS from "./components/contact_us";
import CryptoNews from "./components/news";
import Map from "./components/map";
import homepage_content from "./static/content/content";
import hero_background_3 from "../../assets/hero_background_5.png";
import CopyToClipboard from "react-copy-to-clipboard";

const Home = () => {
  return (
    <div>
      <Navbar homepage={true} />
      <div className="min-h-screen" id="section1">
        <div className="bg-primary-grayed rounded-br-16xl">
          <div className="hero overflow-hidden bg-secondary-light rounded-br-16xl">
            <div className="max-w-screen-lgxl container mx-auto relative px-8 md:px-0" style={{ zIndex: 1 }}>
              <div className="flex items-center justify-center gap-2 py-20 md:justify-between">
                <div className="md:w-2/3 md:space-y-6 space-y-8">
                  <h2 className="text-xl space-y-4 text-center py-4">
                    <span className="font-medium text-4xl md:text-6xl text-primary uppercase">
                      Community Driven
                    </span>
                    <span className="block text-4xl md:text-6xl font-light">
                      Decentralized Protocol
                    </span>
                  </h2>
                  <div className="flex flex-wrap justify-between gap-1">
                    {homepage_content.contracts_1.map((contract) => (
                      <div className="bg-primary text-white text-sm py-1 px-2 rounded-full flex gap-2 items-center">
                        <div className="w-6">
                          <img src={contract.img} alt="" />
                        </div>
                        <span>{contract.text}</span>
                        <CopyToClipboard text={contract.text}>
                          <button className="rounded hover:bg-primary-dark focus:bg-primary-darker">
                            <MdCopyAll size={22} />
                          </button>
                        </CopyToClipboard>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-between gap-1">
                    {homepage_content.contracts_2.map((contract) => (
                      <div className="bg-primary text-white text-sm py-1 px-2 rounded-full flex gap-2 items-center">
                        <div className="w-6">
                          <img src={contract.img} alt="" />
                        </div>
                        <span>{contract.text}</span>
                        <CopyToClipboard text={contract.text}>
                          <button className="rounded hover:bg-primary-dark focus:bg-primary-darker">
                            <MdCopyAll size={22} />
                          </button>
                        </CopyToClipboard>
                      </div>
                    ))}
                  </div>

                  <div class="">
                    <a
                      href="https://lunachow.com/wp-content/uploads/2021/08/LunaChow-Whitepaper-V2.pdf"
                      className="block w-full text-center font-medium bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full text-white p-3">
                      Whitepaper
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <button className="w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                      Donate
                    </button>

                    <a
                      href="/swap"
                      className="block text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                      Swap
                    </a>
                  </div>
                </div>

                <div className="hidden md:flex w-1/2 h-96 justify-center">
                  <img
                    src={hero_background_3}
                    alt=""
                    className="object-cover drop-shadow-2xl relative transform scale-125"
                  />
                </div>
              </div>
            </div>

            <div className="relative h-40">
              <div className="absolute -bottom-40 -left-20 w-full">
                <img src={pattern} alt="" style={{ transform: "scaleY(-1)" }} />
              </div>
            </div>
          </div>

          <div className="py-32 px-8 md:flex items-center justify-center gap-16 space-y-4">
            <div className="space-y-8">
              <h2 className="text-center md:text-left text-6xl text-primary font-bold">
                Buy $LUCHOW
              </h2>
              <p className="text-center md:text-left text-2xl text-gray-600 max-w-md">
                You can buy $LUCHOW Token from Uniswap, Pancake Swap & Dexlabs
              </p>
            </div>

            <div class="space-y-4">
              <div className="flex justify-center gap-4">
                <a href="https://app.uniswap.org/#/swap">
                  <img src={unicorn} alt="" className="w-32" />
                </a>
                <a href="https://pancakeswap.finance/swap">
                  <img src={cat} alt="" className="w-32" />
                </a>
                <a href="https://dexlabs.app/">
                  <img src={experiment} alt="" className="w-32" />
                </a>
              </div>
              <div className="flex justify-center gap-4">
                <a href="https://app.uniswap.org/#/swap">
                  <img src={unicorn_2} alt="" className="w-32" />
                </a>
                <a href="https://pancakeswap.finance/swap">
                  <img src={dragon} alt="" className="w-32" />
                </a>
                <a href="https://dexlabs.app/">
                  <img src={drum} alt="" className="w-32" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <What />
      <Tokenomics />
      <Fair />
      <Upcoming />
      <Map />
      <Roadmap />
      <AsSeen />
      <CoreValues />
      <Featured />
      <FAQ />
      <CryptoNews />
      <ContactUS />

      <Footer />
    </div>
  );
};

export default Home;
