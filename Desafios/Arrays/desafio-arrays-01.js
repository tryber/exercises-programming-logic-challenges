/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  let number = numbers[0];
  let maiorNumero;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(numbers[index] > number){
      number = numbers[index]
    }
  }
  return number;
}

console.log(getMaxNumber([ 2,34,5,1,2]));

module.exports = getMaxNumber;
