/*

01 - Calcular a média

Escreva um algoritmo que recebe 3 valores, calcule e retorne o valor da média no formato abaixo:

---------------------
"O Valor médio é: x."
---------------------

*/

function average(number1, number2, number3){
  const average = (number1 + number2 + number3) / 3;
  return `O Valor médio é: ${average}`;
}

module.exports = average;
