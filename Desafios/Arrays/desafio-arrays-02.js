/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  let teste;
  let n = numbers[0];
  for (const number of  numbers) {
    if(numbers[number] < n){
      n = numbers[number]
    }
  }
  // Desenvolva seu código nessa função
  return n;
}

console.log(getMinNumber([24,15,14,13,44,1,44,55]))
module.exports = getMinNumber;
