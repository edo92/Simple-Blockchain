const { Blockchain, Transaction } = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('cf1ef9c2dcd71d21a60c0fd6e8fac308592f965724c31361c640a9d076b31190');
const myWalletAddress = myKey.getPublic('hex');


let savj = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savj.addTransactions(tx1);

savj.minePendingTransactions(myWalletAddress);
console.log('Balance: ', savj.getBalanceOfAddress(myWalletAddress));
console.log('is Valid', savj.isChainValid())
