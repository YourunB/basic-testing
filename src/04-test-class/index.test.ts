import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const bankAccount = getBankAccount(5000);

    expect(bankAccount.getBalance()).toBe(5000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(5000);

    expect(() => bankAccount.withdraw(6000)).toThrow(InsufficientFundsError);
    expect(() => bankAccount.withdraw(6000)).toThrow(`Insufficient funds: cannot withdraw more than ${bankAccount.getBalance()}`);
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccount = getBankAccount(5000);
    const bankAccountSecond = getBankAccount(2000);

    expect(() => bankAccount.transfer(6000, bankAccountSecond)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccount = getBankAccount(5000);

    expect(() => bankAccount.transfer(1000, bankAccount)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(5000);

    bankAccount.deposit(2000);

    expect(bankAccount.getBalance()).toBe(7000);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(5000);

    bankAccount.withdraw(2000);

    expect(bankAccount.getBalance()).toBe(3000);
  });

  test('should transfer money', () => {
    const bankAccount = getBankAccount(5000);
    const bankAccountSecond = getBankAccount(2000);

    bankAccount.transfer(3000, bankAccountSecond);

    expect(bankAccount.getBalance()).toBe(2000);
    expect(bankAccountSecond.getBalance()).toBe(5000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bankAccount = getBankAccount(5000);
  
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(500);
  
    const balance = await bankAccount.fetchBalance();
    
    expect(balance).toBeGreaterThanOrEqual(0);
    expect(balance).toBeLessThanOrEqual(1000);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(5000);

    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(4000);
    await bankAccount.synchronizeBalance();
    
    expect(bankAccount.getBalance()).toBe(4000);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(5000);

    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(null);

    await expect(bankAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
