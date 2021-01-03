import SHA256 from 'crypto-js/sha256';

interface IBlockParams<T> {
  timestamp: number,
  transactions: Array<T>,
  previusHash: string
}

const createBlock = <T>(params: IBlockParams<T>) => {
  const { timestamp, transactions, previusHash } = params;

  const nonce = 0;

  const calculateHash = (): string => SHA256(
    timestamp + previusHash + JSON.stringify(transactions) + nonce
  ).toString();

  const hash = calculateHash();
};

export default createBlock;
