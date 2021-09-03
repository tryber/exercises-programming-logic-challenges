// 01 - Maior número :
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MAIOR número da lista.

// Desenvolva seu código aqui.

const maior = require('../array01');

describe("Test Easy ", ()=>{
  test('should return null', () => {
    expect(maior([])).toBe(null)
  })  
})
describe("Test Normal ", ()=>{
  test('should return 1', () => {
    expect(maior([1])).toBe(1)
  })
  test('should return 2', () => {
    expect(maior([1,2])).toBe(2)
  })
  test('should return 3', () => {
    expect(maior([3,1,2])).toBe(3)
  })  
})
describe("Test Hard ", ()=>{
  test('should return -13', () => {
    expect(maior([-30,-21,-52,-13])).toBe(-13)
  })
  test('should return 99', () => {
    expect(maior([-30,-21,99,-52])).toBe(99)
  })
})
describe("Test Very Hard ", ()=>{
  test('should return -13', () => {
    expect(maior([-30,-21,-52,'-13'])).toBe(-13)
  })
  test('should return 99', () => {
    expect(maior([-30,-21,'99',-52])).toBe(99)
  })
})