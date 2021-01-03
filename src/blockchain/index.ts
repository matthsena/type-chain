import block from '../block';

const blockchain = () => {
  const difficulty = 4;
  const pendingTransactions = [];
  const miningReward = 10;

  const createGenesisBlock = () => {
    const genesisBlock = block({
      timestamp: Date.now(),
      transactions: pendingTransactions,
      previusHash: '0'
    });

    return genesisBlock.block;
  };

  const chain = [createGenesisBlock()];
};

export default block;
