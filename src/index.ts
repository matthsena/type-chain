import blockchain from './blockchain';
import transactions from './transactions';

const typeCoin = blockchain();

const transaction1 = transactions('address1', 'address2', 100);
typeCoin.createTransaction(transaction1);

const transaction2 = transactions('address2', 'address1', 30);
typeCoin.createTransaction(transaction2);

console.log('Start mining');
typeCoin.minePendingTransactions('address3');

console.log('address1: ', typeCoin.getBalanceOfAddress('address1'));
console.log('address2: ', typeCoin.getBalanceOfAddress('address2'));
console.log('address3: ', typeCoin.getBalanceOfAddress('address3'));

typeCoin.minePendingTransactions('address3');

console.log('address1: ', typeCoin.getBalanceOfAddress('address1'));
console.log('address2: ', typeCoin.getBalanceOfAddress('address2'));
console.log('address3: ', typeCoin.getBalanceOfAddress('address3'));
