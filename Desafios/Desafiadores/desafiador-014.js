/*

14 - Soma de números primos

Escreva um algoritmo que some números primos de 0 à 150 e retorne o resultado. 

*/

function isPrime (n) {
  if (n <= 1) return false
  if (n === 2) return true
  if (n > 2 && n % 2 === 0) return false // This line saves some processor calculations
  for (let index = 2; index < n; index++) {
    if (n % index == 0){
      return false
    }
  }
  return true
}

function sumPrimesNumbers(){
  let primesSum = 0

  for (let index = 1; index <= 150; index++) {
    if (isPrime(index)) primesSum += index
  }
  return primesSum
}

module.exports = sumPrimesNumbers;
