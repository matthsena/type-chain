import blockchain from './blockchain';
import transactions from './transactions';
import { debugMain } from './debug';

const typeCoin = blockchain();

const transaction1 = transactions('USER_1', 'USER_2', 100);
typeCoin.createTransaction(transaction1);

const transaction2 = transactions('USER_2', 'USER_1', 30);
typeCoin.createTransaction(transaction2);

typeCoin.minePendingTransactions('USER_3');

debugMain('🏦 USER_1 balance $', typeCoin.getBalanceOfAddress('USER_1'));
debugMain('🏦 USER_2 balance $', typeCoin.getBalanceOfAddress('USER_2'));
debugMain('🏦 USER_3 balance $', typeCoin.getBalanceOfAddress('USER_3'));

typeCoin.minePendingTransactions('USER_3');

debugMain('🏦 USER_1 balance $', typeCoin.getBalanceOfAddress('USER_1'));
debugMain('🏦 USER_2 balance $', typeCoin.getBalanceOfAddress('USER_2'));
debugMain('🏦 USER_3 balance $', typeCoin.getBalanceOfAddress('USER_3'));
