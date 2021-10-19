/*

12 - Fatorial

Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.

*/

function factorial(n) {
  if (n <= 1 ){
    return 1
  }
  return n * factorial(n-1)
}

module.exports = factorial;
