/*

10 - Nega Números

Escreva uma algoritmo que recebe um array de números, retorne uma cópia do array com todos os números negados.

Por exemplo:
--------------
Entrada:
[2 ,-3 ,4 ]

Saída:
[-2, 3 ,-4 ]
--------------

*/

function negateNumbers(numbers){
  let negatedNumbers = []
  numbers.forEach(element => {
    negatedNumbers.push(element * -1)
  });
  return negatedNumbers
}

module.exports = negateNumbers;
