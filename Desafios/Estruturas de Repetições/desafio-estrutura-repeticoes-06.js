/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers(){

  let numerosImpares = "";

  for (let index = 1; index <= 50; index += 1) {
    
    if(index % 2 !== 0 && index < 49){
      numerosImpares += index + ", ";

    } else if(index % 2 !== 0){
      numerosImpares += index + ".";
    }
    
  }

  return numerosImpares;

}

console.log(oddNumbers());

module.exports = oddNumbers;
