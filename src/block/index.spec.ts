import block from './index';

describe('Block Tests', () => {
  const bl = block({ previusHash: '0', timestamp: Date.now(), transactions: [] });

  test('Successfully create block ', () => {
    expect(bl).toHaveProperty('block');
    expect(bl).toHaveProperty('calculateHash');
    expect(bl).toHaveProperty('mineNewBlock');
  });

  test('Check block property attributes', () => {
    expect(bl.block).toHaveProperty('timestamp');
    expect(bl.block).toHaveProperty('transactions');
    expect(bl.block).toHaveProperty('previusHash');
    expect(bl.block).toHaveProperty('nonce');
    expect(bl.block).toHaveProperty('hash');
  });

  test('Test Hash', () => {
    expect(bl.block.hash).toBe(bl.calculateHash());
  });

  test('Test Mining a new block 1', () => {
    const newBlock = block({
      timestamp: Date.now(),
      previusHash: bl.block.hash,
      transactions: []
    });

    const mined = newBlock.mineNewBlock(4);

    expect(mined).toHaveProperty('timestamp');
    expect(mined).toHaveProperty('transactions');
    expect(mined).toHaveProperty('previusHash');
    expect(mined).toHaveProperty('nonce');
    expect(mined).toHaveProperty('hash');
    expect(mined.previusHash).toStrictEqual(bl.block.hash);
  });
});
