// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const calculate = simpleCalculator({ a: 2, b: 2, action: Action.Add })
    expect(calculate).toBe(4);
  });

  test('should subtract two numbers', () => {
    const calculate = simpleCalculator({ a: 10, b: 5, action: Action.Subtract });
    expect(calculate).toBe(5);
  });

  test('should multiply two numbers', () => {
    const calculate = simpleCalculator({ a: 2, b: 2, action: Action.Multiply });
    expect(calculate).toBe(4);
  });

  test('should divide two numbers', () => {
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
