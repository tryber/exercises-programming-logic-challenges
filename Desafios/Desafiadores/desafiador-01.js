/*

01 - Verifica se pessoa tem idade para dar entrada na CNH

Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.

Se a pessoa tiver menos de 18 anos retorne:
------------------------------------------------------
"x tem y anos de idade e não pode iniciar o processo."
------------------------------------------------------

Caso contrário:
--------------------------------------------------
"x tem y anos de idade e pode iniciar o processo."
--------------------------------------------------

*/

function cnhProcess(name, birthYear){
  const minAge = 18;

  if(birthYear >= minAge) return `${name} tem ${birthYear} de idade e pode iniciar o processo.`;
  if(birthYear < minAge) return `${name} tem ${birthYear} de idade e não pode iniciar o processo.`;
}

module.exports = cnhProcess;
