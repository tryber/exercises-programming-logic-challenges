/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma outra string com os nomes invertido.

Por exemplo:
---------------------
Entrada:
"Xablau Xablauzinho"

Saída:
"Xablauzinho Xablau"
---------------------

*/

function reverseNames(fullName) {
  let invertName = fullName.split(' ');
  return `${invertName[1]} ${invertName[0]}`;
}
console.log(reverseNames('Igor Leal'));

module.exports = reverseNames;
