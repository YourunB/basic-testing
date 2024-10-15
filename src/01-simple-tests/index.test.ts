// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const add = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Add
    })
    expect(add).toBe(4);
  });

  test('should subtract two numbers', () => {
    const subtract = simpleCalculator({
      a: 10,
      b: 5,
      action: Action.Subtract
    });
    expect(subtract).toBe(5);
  });

  test('should multiply two numbers', () => {
    const multiply = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Multiply
    });
    expect(multiply).toBe(4);
  });

  test('should divide two numbers', () => {
    const divide = simpleCalculator({
      a: 6,
      b: 2,
      action: Action.Divide
    });
    expect(divide).toBe(3);
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
