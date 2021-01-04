import blockchain from './index';

describe('BlockChain Tests', () => {
  test('Should create BlockChain and Genesis Block', () => {
    const network1 = blockchain();

    expect(network1).toHaveProperty('minePendingTransactions');
    expect(network1).toHaveProperty('createTransaction');
    expect(network1).toHaveProperty('getBalanceOfAddress');
  });

  test('Can mine pending transactions', () => {
    const network2 = blockchain();
    const mocked = jest.spyOn(network2, 'minePendingTransactions');

    network2.minePendingTransactions('ADDRESS_X');

    expect(mocked).toHaveBeenCalledTimes(1);
    expect(mocked).toHaveBeenCalledWith('ADDRESS_X');
    expect(mocked).not.toHaveBeenCalledWith('ADDRESS_Y');
  });

  test('Get balance from address', () => {
    const network3 = blockchain();
    const mocked = jest.spyOn(network3, 'getBalanceOfAddress');

    const balance = network3.getBalanceOfAddress('ADDRESS_X');

    expect(balance).toBe(0);
    expect(mocked).toHaveBeenCalledTimes(1);
    expect(mocked).toHaveBeenCalledWith('ADDRESS_X');
    expect(mocked).not.toHaveBeenCalledWith('ADDRESS_Y');
  });
});
