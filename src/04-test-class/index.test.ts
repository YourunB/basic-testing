// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError } from '.';

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
    const bankAccountOther = getBankAccount(2000);

    expect(() => bankAccount.transfer(6000, bankAccountOther)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
  });

  test('should deposit money', () => {
    // Write your test here
  });

  test('should withdraw money', () => {
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
