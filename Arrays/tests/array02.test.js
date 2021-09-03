// 02 - Menor número
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MENOR número da lista.

const menor = require('../array02');

describe("Test Easy ", ()=>{
  test('should return null', () => {
    expect(menor([])).toBe(null)
  })  
})
describe("Test Normal (all numbers positive values)", ()=>{
  test('should return 1', () => {
    expect(menor([1])).toBe(1)
  })
  test('should return 2', () => {
    expect(menor([4,2])).toBe(2)
  })
  test('should return 3', () => {
    expect(menor([3,9,22])).toBe(3)
  })  
})
describe("Test Hard (numbers positive and negative)", ()=>{
  test('should return -52', () => {
    expect(menor([-30,-21,-52,-13])).toBe(-52)
  })
  test('should return -60', () => {
    expect(menor([-60,-21,99,-52])).toBe(-60)
  })
})
describe("Test Very Hard (numbers and strings)", ()=>{
  test('should return -73', () => {
    expect(menor([-30,-21,-52,'-73'])).toBe(-73)
  })
  test('should return -99', () => {
    expect(menor([-30,-21,'-99',-52])).toBe(-99)
  })
})