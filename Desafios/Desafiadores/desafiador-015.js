
// 15 - Fatorial e média

/*

Faça uma função que calcule o fatorial de um número recebido por parâmetro e em seguida, utilize-a para fazer a função que calcula a média dos fatoriais de A a B,
sendo A e B números inteiros maiores ou iguais a 0.
A média deve ter até 2 casas decimais de precisão.
*/

function factorial15(n) {
  if (n <= 1) return 1
  let resFactorial = 1
  for (let index = n; index > 1 ; index--) {
    resFactorial *= index
  }
  return resFactorial
}

function meanFactorialFromAToB(a, b) {
  let factSum = 0
  if (a < b) {
    for(let index = a; index <= b; index++){
      factSum += factorial15(index)
    }
    
    return parseFloat((factSum / ((b-a)+1)).toFixed(2))
  }
  else {
    for(let index = b; index <= a; index++){
      factSum += factorial15(index)
    }
    return parseFloat((factSum / ((a-b)+1)).toFixed(2))
  }
}

module.exports = {
  factorial15,
  meanFactorialFromAToB,
};
