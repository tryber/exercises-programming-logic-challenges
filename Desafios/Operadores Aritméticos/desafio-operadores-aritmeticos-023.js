/*

23 - Divisões sucessivas

Escreva um algoritmo que leia um número e divida-o por dois sucessivamente até que o seu resultado seja menor que 1.

Retorne a quantidade de vezes que o número foi dividido no formato:
--------------------------
'Quantidade total de divisões: n'
--------------------------

*/

function successiveDivisions(number) {
  let quotient = number;
  let divisions = 0;

  while (quotient >= 1) {
    quotient /= 2;
    divisions += 1;
  }
  
  return `Quantidade total de divisões: ${divisions}`;
}



module.exports = successiveDivisions;
