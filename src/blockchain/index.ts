import transactions, { ITransactions } from '../transactions';
import block, { IBlock } from '../block';

const blockchain = () => {
  const difficulty = 4;
  let pendingTransactions = [];
  const miningReward = 10;

  const createGenesisBlock = (): IBlock<void> => {
    const genesisBlock = block({
      timestamp: Date.now(),
      transactions: pendingTransactions,
      previusHash: '0'
    });

    return genesisBlock.block;
  };

  const chain: Array<IBlock<void | ITransactions>> = [createGenesisBlock()];

  const minePendingTransactions = (miningRewardAdress: string): void => {
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
  };

  const getBalanceOfAddress = (address: string): number => {
    let balance = 0;

    chain.map((b: IBlock<void | ITransactions>) => {
      balance = 0;

      b.transactions.map((t: ITransactions) => {
        if (t.fromAddress === address) {
          balance -= t.amount;
        }

        if (t.toAddress === address) {
          balance += t.amount;
        }

        return null;
      });

      return null;
    });

    return balance;
  };

  return { minePendingTransactions, createTransaction, getBalanceOfAddress };
};

export default blockchain;
