/*

05 - Primeira e última letra

Escreva um algoritmo que recebe uma palavra e retorne uma string com a primeira e ultima letra no formato:

A primeira letra é: "X", a ultima letra é: "Y".

*/

function firstLastLetter(word) {
  // Desenvolva seu código nessa função
  return `A primeira letra é: ${word[0]} e a última letra é: ${
    word[word.length - 1]
  }.`;
}

module.exports = firstLastLetter;
