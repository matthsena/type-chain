import transactions, { ITransactions } from '../transactions';
import block, { IBlock } from '../block';
import { debugBlockchain } from '../debug';

interface IBlockchainFunction {
  minePendingTransactions: (miningRewardAdress: string) => void,
  createTransaction: (transaction: ITransactions) => void,
  getBalanceOfAddress: (address: string) => number
}

const blockchain = (): IBlockchainFunction => {
  const difficulty = 6;
  let pendingTransactions = [];
  const miningReward = 10;

  const createGenesisBlock = (): IBlock<ITransactions> => {
    const genesisBlock = block({
      timestamp: Date.now(),
      transactions: [transactions(null, null, null)],
      previusHash: '0'
    });

    debugBlockchain('🚀 Created Genesis Block: ', genesisBlock.block.hash);

    return genesisBlock.block;
  };

  const chain: Array<IBlock<ITransactions>> = [createGenesisBlock()];

  const minePendingTransactions = (miningRewardAdress: string): void => {
    debugBlockchain('⛏️  Mining pending transactions!');

    const lastBlock = chain[chain.length - 1];

    const newBlock = block({
      timestamp: Date.now(),
      previusHash: lastBlock.hash,
      transactions: pendingTransactions
    });

    chain.push(newBlock.mineNewBlock(difficulty));

    pendingTransactions = [transactions(null, miningRewardAdress, miningReward)];
  };

  const createTransaction = (transaction: ITransactions): void => {
    pendingTransactions.push(transaction);
    debugBlockchain(`🔔 New transaction added to queue. From: ${transaction.fromAddress}; To: ${transaction.toAddress}.`);
  };

  const getBalanceOfAddress = (address: string): number => {
    let balance = 0;

    chain.map((bl: IBlock<ITransactions>): void => {
      bl.transactions.map((transaction: ITransactions): void => {
        if (transaction.fromAddress === address) {
          balance -= transaction.amount;
        }

        if (transaction.toAddress === address) {
          balance += transaction.amount;
        }
      });
    });

    return balance;
  };

  return {
    minePendingTransactions, createTransaction, getBalanceOfAddress
  };
};

export default blockchain;
