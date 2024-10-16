import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

jest.mock('fs');
jest.mock('fs/promises');

describe('doStuffByTimeout', () => {
  beforeAll(() => jest.useFakeTimers());
  afterEach(() => jest.restoreAllMocks());

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    const timeSpy = jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(callback, 500);
    expect(timeSpy).toHaveBeenCalledWith(callback, 500);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    doStuffByTimeout(callback, 500);
    
    jest.advanceTimersByTime(499);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => jest.useFakeTimers());
  afterEach(() => jest.restoreAllMocks());

  test('should set interval with provided callback and timeout', () => {
    const intervalSpy = jest.spyOn(global, 'setInterval');
    const callback = jest.fn();

    doStuffByInterval(callback, 500);
    expect(intervalSpy).toHaveBeenCalledWith(callback, 500);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    doStuffByInterval(callback, 500);
    
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  beforeAll(() => jest.clearAllMocks());
  
  const file = 'test.txt';

  test('should call join with pathToFile', async () => {
    const path = 'mocked/full/path/test.txt';

    jest.spyOn(require('path'), 'join').mockReturnValue(path);
    await readFileAsynchronously(file);
    expect(require('path').join).toHaveBeenCalledWith(__dirname, file);
  });

  test('should return null if file does not exist', async () => {
    (existsSync as jest.Mock).mockReturnValue(false);
    expect(await readFileAsynchronously(file)).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const fileRead = 'Test';

    (existsSync as jest.Mock).mockReturnValue(true);
    (readFile as jest.MockedFunction<typeof readFile>).mockResolvedValue(Buffer.from(fileRead));
    
    expect(await readFileAsynchronously(file)).toBe(fileRead);
  });
});
