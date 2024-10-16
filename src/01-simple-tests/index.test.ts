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
    const exponentiate = simpleCalculator({
      a: 4,
      b: 4,
      action: Action.Exponentiate
    });
    expect(exponentiate).toBe(256);
  });

  test('should return null for invalid action', () => {
    const invalid = simpleCalculator({
      a: 0,
      b: 2,
      action: 'invalid'
    });
    expect(invalid).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const err1 = simpleCalculator({
      a: 'error',
      b: 10,
      action: Action.Add
    });

    const err2 = simpleCalculator({
      a: 10,
      b: null,
      action: Action.Add
    });

    const err3 = simpleCalculator({
      a: null,
      b: 10,
      action: Action.Add
    });

    const err4 = simpleCalculator({
      a: 10,
      b: 20,
      action: undefined
    });
    
    expect(err1).toBeNull();
    expect(err2).toBeNull();
    expect(err3).toBeNull();
    expect(err4).toBeNull();
  });
});
