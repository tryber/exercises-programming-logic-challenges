/*

02 - Encontre o menor número de uma array

Escreva um algoritmo que recebe uma array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  numbers.sort((a,b) => a-b)
  return numbers[0]
}


module.exports = getMinNumber;
