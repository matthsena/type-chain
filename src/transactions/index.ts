export interface ITransactions {
  fromAddress: string | null,
  toAddress: string,
  amount: number
}

const transactions = (
  fromAddress: string | null, toAddress: string, amount: number
):ITransactions => ({
  fromAddress,
  toAddress,
  amount
});

export default transactions;
