export function getTransactionReceiptMined (web3, txnHash, options) {
  interval = options && options.interval ? options.interval : 500;
  console.log ('checking txnhash', txnHash);
  var transactionReceiptAsync = async function (txnHash, resolve, reject) {
    try {
      var receipt = web3.eth.getTransactionReceipt (txnHash);
      if (!receipt) {
        setTimeout (function () {
          transactionReceiptAsync (txnHash, resolve, reject);
        }, interval);
      } else {
        if (options && options.ensureNotUncle) {
          var resolvedReceipt = await receipt;
          if (!resolvedReceipt || !resolvedReceipt.blockNumber)
            setTimeout (function () {
              transactionReceiptAsync (txnHash, resolve, reject);
            }, interval);
          else {
            try {
              var block = await web3.eth.getBlock (resolvedReceipt.blockNumber);
              var current = await web3.eth.getBlock ('latest');
              if (current.number - block.number >= 12) {
                var txn = await web3.eth.getTransaction (txnHash);
                if (txn.blockNumber != null) resolve (resolvedReceipt);
                else
                  reject (
                    new Error (
                      'Transaction with hash: ' +
                        txnHash +
                        ' ended up in an uncle block.'
                    )
                  );
              } else
                setTimeout (function () {
                  transactionReceiptAsync (txnHash, resolve, reject);
                }, interval);
            } catch (e) {
              setTimeout (function () {
                transactionReceiptAsync (txnHash, resolve, reject);
              }, interval);
            }
          }
        } else resolve (receipt);
      }
    } catch (e) {
      reject (e);
    }
  };

  if (Array.isArray (txnHash)) {
    var promises = [];
    txnHash.forEach (function (oneTxHash) {
      promises.push (getTransactionReceiptMined (web3, oneTxHash, options));
    });
    return Promise.all (promises);
  } else {
    return new Promise (function (resolve, reject) {
      transactionReceiptAsync (txnHash, resolve, reject);
    });
  }
}

export default getTransactionReceiptMined;
