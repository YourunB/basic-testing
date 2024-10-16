// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const init = jest.requireActual('./index');

  return {
    ...init,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn()
  };
});

describe('partial mocking', () => {

  afterAll(() => jest.unmock('./index'));
  beforeEach(() => jest.clearAllMocks());

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const consoleSpyOn = jest.spyOn(console, 'log').mockImplementation()

    mockOne();
    mockTwo();
    mockThree();

    expect(consoleSpyOn).not.toHaveBeenCalledWith('foo');
    expect(consoleSpyOn).not.toHaveBeenCalledWith('bar');
    expect(consoleSpyOn).not.toHaveBeenCalledWith('baz');

    consoleSpyOn.mockRestore();
  });

  test('unmockedFunction should log into console', () => {
    const consoleSpyOn = jest.spyOn(console, 'log').mockImplementation()

    unmockedFunction();

    expect(consoleSpyOn).toHaveBeenCalledWith('I am not mocked');

    consoleSpyOn.mockRestore();
  });
});
