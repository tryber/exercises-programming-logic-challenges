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

const reverseNames = (fullName) => `${fullName.split(' ')[1]} ${fullName.split(' ')[0]}`;
console.log(reverseNames('Igor Leal'));

module.exports = reverseNames;
