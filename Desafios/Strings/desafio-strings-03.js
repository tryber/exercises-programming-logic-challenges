/*

03 - Apresentação pessoal

Escreva um algoritmo que recebe o primeiro e o último nome de uma pessoa mais a idade, e retorne uma mensagem.

Por exemplo:
---------------------------------------------------
Entradas:
"João","Carvalho', 25

Saída:
"Meu nome é João Carvalho e tenho 25 anos de vida"
---------------------------------------------------

*/

function personalPresentation(firstName, lastName, age) {
  let fullName = `${firstName} ${lastName}`;
  return `Meu nome é ${fullName} e tenho ${age} anos de vida.`;
}

console.log(personalPresentation('Igor', 'Leal', 25));

module.exports = personalPresentation;
