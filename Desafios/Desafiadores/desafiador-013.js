/*

13 - Fibonacci

A sequência de números 0 1 1 2 3 5 8 13 21...n é conhecida como sequência de Fibonacci.

Nessa sequência, cada número, depois dos 2 primeiros é igual à soma dos 2 anteriores.

Escreva um algoritmo que recebe um valor n que corresponde ao enésimo número da sequência e retorne o enésimo número da sequência de Fibonnaci.

Por exemplo:
------------
Entrada:
5

Saída:
3
------------

*/

function fibonnaci(n){
  let FibonacciSequence = [0, 1, 1, 2, 3]
  for (let index = 5; index <= n-1; index++) {
    FibonacciSequence.push(FibonacciSequence[index-1]+FibonacciSequence[index-2])
  }
  return FibonacciSequence[n-1]
}

module.exports = fibonnaci;
