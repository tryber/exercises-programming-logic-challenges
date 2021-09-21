/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma string com os nomes invertidos: "Sobrenome Nome". 

Por exemplo: 
Entrada: "Xablau Xablauzinho"
Saída: "Xablauzinho Xablau"

*/

function reverseNames(fullName) {
  // Desenvolva seu código nessa função
  const [first, last] = fullName.split(" ");
  return `${last} ${first}`;
}

module.exports = reverseNames;
