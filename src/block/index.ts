import SHA256 from 'crypto-js/sha256';

interface IBlockParams<T> {
  timestamp: number,
  transactions: Array<T>,
  previusHash: string
}

const createBlock = <T>(params: IBlockParams<T>) => {
  const { timestamp, transactions, previusHash } = params;

  let nonce = 0;

  const calculateHash = (): string => SHA256(
    timestamp + previusHash + JSON.stringify(transactions) + nonce
  ).toString();

  let hash = calculateHash();

  const mineNewBlock = (difficulty: number): void => {
    while (hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      nonce += 1;
      hash = calculateHash();
    }

    console.log('👷‍♂️ A new block has been mined: ', hash);
  };

  return { calculateHash, mineNewBlock };
};

export default createBlock;
