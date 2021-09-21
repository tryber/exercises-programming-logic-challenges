/*

06 - Nome do cachorro

Joana adotou um cachorrinho e decidiu usar o nome de suas comidas favoritas para dar nome 
a ele, ela vai usar as 3 primeiras letras do seu salgadinho favorito e juntar com as 3 ultimas 
letras do seu doce favorito.

Escreva um algoritmo que recebe o nome do salgadinho e o nome do doce e retorne o nome do cachorrinho de Joana no formato:

O cachorrinho de Joana vai se chamar:  XXX 

*/

function dogName(snack, sweet) {
  // Desenvolva seu código nessa função
  return `O cachorrinho de Joana vai se chamar: ${snack.slice(
    0,
    3
  )}${sweet.slice(-3)}`;
}

module.exports = dogName;
