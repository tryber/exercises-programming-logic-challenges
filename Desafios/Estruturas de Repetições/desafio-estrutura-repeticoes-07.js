/*

07 - Onde está o elemento?

Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.

Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------

*/


function findIndexOf(array, elemento){
  
  // Adiciona elemento, passado pelo usuário, dentro do array
  if(elemento == undefined){
    return "Elemento Não encontrado no array.";
  }

  array.push(elemento);
  return array;
}

console.log(findIndexOf([54, 54, 11], 10));


module.exports = findIndexOf;

