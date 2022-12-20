/*

16 - Verdadeiro ou falso?

Escreva um algoritmo que retorne de forma aleatória true ou false.

Obs: O retorne deve ser do tipo boolean.

*/

function randomBoolean(){
  const zeroOrOne = Math.round(Math.random());
  return zeroOrOne === 0;
}

module.exports = randomBoolean;
