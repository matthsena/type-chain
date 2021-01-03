import SHA256 from 'crypto-js/sha256';

interface IBlockParams<T> {
  timestamp: number,
  transactions: Array<T>,
  previusHash: string
}

export interface IBlock<T> extends IBlockParams<T> {
  nonce: number,
  hash: string
}

interface IBlockFunction<T> {
  calculateHash: () => string,
  mineNewBlock: (difficulty: number) => IBlock<T>,
  block: IBlock<T>
}

const createBlock = <T>(params: IBlockParams<T>): IBlockFunction<T> => {
  const { timestamp, transactions, previusHash } = params;

  let nonce = 0;

  const calculateHash = (): string => SHA256(
    timestamp + previusHash + JSON.stringify(transactions) + nonce
  ).toString();

  let hash = calculateHash();

  const mineNewBlock = (difficulty: number): IBlock<T> => {
    while (hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      nonce += 1;
      hash = calculateHash();
    }

    console.log('👷‍♂️ A new block has been mined: ', hash);

    return {
      timestamp,
      transactions,
      previusHash,
      nonce,
      hash
    };
  };

  const block = {
    timestamp,
    transactions,
    previusHash,
    nonce,
    hash
  };

  return { calculateHash, mineNewBlock, block };
};

export default createBlock;
