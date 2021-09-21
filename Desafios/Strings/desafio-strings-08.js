/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.
A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trata as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  // Desenvolva seu código nessa função
  let newString = string;
  newString = newString.toLowerCase();
  newString = newString.replace(/[àáäâã]/g, "a");
  newString = newString.replace(/[èéëê]/g, "e");
  newString = newString.replace(/[ìíïî]/g, "i");
  newString = newString.replace(/[òóöô]/g, "o");
  newString = newString.replace(/[ùúüû]/g, "u");

  return [...newString].reduce((acc, cur) => {
    if (cur === letter) {
      acc = acc + 1;
      return acc;
    }
    return acc;
  }, 0);
}

module.exports = countLetters;
