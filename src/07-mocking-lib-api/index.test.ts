import axios from 'axios';
import { throttledGetDataFromApi } from './index';
import * as utils from './utils';

beforeAll(() => jest.useFakeTimers());
afterAll(() => jest.useRealTimers());

jest.mock('axios', () => {
  return {
    create: () => {
      return { get: utils.get }
    },
  }
})

describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    utils.timer();
    jest.clearAllMocks();
  })

  test('should create instance with provided base url', async () => {
    const axiosSpy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi('https://jsonplaceholder.typicode.com');
    expect(axiosSpy).toHaveBeenCalledWith({baseURL: 'https://jsonplaceholder.typicode.com'});
  });

  test('should perform request to correct provided url', async () => {
    const path = '/page';
    const axiosSpy = jest.spyOn(utils, 'get');

    await throttledGetDataFromApi(path);
    expect(axiosSpy).toHaveBeenCalledWith(path);
  });

  test('should return response data', async () => {
    expect(await throttledGetDataFromApi('https://jsonplaceholder.typicode.com')).toBe(utils.data);
  });
});
