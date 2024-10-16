import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const num = 42;
    const res = await resolveValue(num);

    expect(res).toBe(num);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const err = 'Provided error';

    expect(() => throwError(err)).toThrow(err);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
