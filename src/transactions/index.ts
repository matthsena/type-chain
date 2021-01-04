import { debugTransactions } from '../debug';

export interface ITransactions {
  fromAddress: string | null,
  toAddress: string | null,
  amount: number | null
}

const transactions = (
  fromAddress: string | null, toAddress: string, amount: number
):ITransactions => {
  if (!fromAddress && toAddress && amount) {
    debugTransactions(`💰 The network will send  ${amount} coins as a mining reward in the next mining to:`, toAddress);
  }

  return {
    fromAddress,
    toAddress,
    amount
  };
};

export default transactions;
