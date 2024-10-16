import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const res = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: null,
            next: null,
          },
        },
      },
    };

    expect(generateLinkedList([1, 2, 3])).toStrictEqual(res);
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(['a', 'b', 'c'])).toMatchSnapshot();
  });
});
