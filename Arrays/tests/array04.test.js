// 04 - Todos do mesmo tipo?
// Elabore uma função que verifica se todos os elementos de um array são do mesmo tipo.
// A função deve retornar true ou false.

// Desenvolva seu código aqui.

const isAllTheSame = require('../array04');

describe('Test Easy ', () => {
  test('should return true', () => {
    expect(isAllTheSame([])).toBe(true);
  });
});
describe('Test Normal', () => {
  test('should return true', () => {
    expect(isAllTheSame([1, 2])).toBe(true);
  });
  test('should return true', () => {
    expect(isAllTheSame([4, 2])).toBe(true);
  });
  test('should return false', () => {
    expect(isAllTheSame([3, '9', 22])).toBe(false);
  });
});
describe('Test Hard', () => {
  test('should return false', () => {
    expect(isAllTheSame([-30, null, -52, -13])).toBe(false);
  });
  test('should return false', () => {
    expect(isAllTheSame([undefined, -21, 99, -52])).toBe(false);
  });
});
describe('Test Very Hard', () => {
  test('should return false', () => {
    expect(isAllTheSame()).toBe(false);
  });
  test('should return false', () => {
    expect(isAllTheSame(null)).toBe(false);
  });
});
