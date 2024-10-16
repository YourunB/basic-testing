import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 20, b: 10, action: Action.Subtract, expected: 10 },
  { a: 30, b: 15, action: Action.Subtract, expected: 15 },
  { a: 50, b: 25, action: Action.Subtract, expected: 25 },

  { a: 3, b: 4, action: Action.Multiply, expected: 12 },
  { a: 2, b: 5, action: Action.Multiply, expected: 10 },
  { a: 10, b: 3, action: Action.Multiply, expected: 30 },

  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 20, b: 5, action: Action.Divide, expected: 4 },

  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 10, b: 2, action: Action.Exponentiate, expected: 100 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'perform a, b, action',
    ({ a: a, b: b, action: operation, expected: res }) => {
      const calculationResult = simpleCalculator({
        a: a,
        b: b,
        action: operation,
      });
      expect(calculationResult).toBe(res);
    },
  );

  test('return null', () => {
    const res = simpleCalculator({
      a: 1,
      b: 2,
      action: 'unknown',
    });

    const invalidArr = [
      { a: 'ten', b: 20, action: Action.Add },
      { a: 10, b: 20, action: null },
      { a: 10, b: undefined, action: Action.Subtract },
    ];

    invalidArr.forEach((invalid) => {
      const res = simpleCalculator(invalid);
      expect(res).toBeNull();
    });

    expect(res).toBeNull();
  });
});
