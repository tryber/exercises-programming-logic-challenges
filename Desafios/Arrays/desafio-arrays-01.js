/*

01 - Encontre o maior número de uma array

Escreva um algoritmo que recebe uma array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  numbers.sort((a, b)=> a-b)
  return numbers[numbers.length-1]
}
module.exports = getMaxNumber;
