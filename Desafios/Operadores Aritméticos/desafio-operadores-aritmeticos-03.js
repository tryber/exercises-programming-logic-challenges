/*

03 - Antecessor e Sucessor

Escreva um algoritmo que recebe um número inteiro e retorne o seu antecessor e sucessor no seguinte formato:

--------------------------------------------------
"O antecessor de "number" é x e seu sucessor é y."
-------------------------------------------------- 

*/

function showNeighbors(number){
  return (
    `O antecessor de ${number} é ${number - 1} e seu sucessor é ${number + 1}`
  );
}

module.exports = showNeighbors;
