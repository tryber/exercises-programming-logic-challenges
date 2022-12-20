/*

21 - Média ponderada

Escreva um algoritmo que recebe 3 notas com valores de 0 a 10 e calcule a media ponderada com pesos 3, 3 e 4 respectivamente.

Considere a seguintes premissas:
* “Aprovação” caso a média seja igual ou superior a 6;
* “Reprovação” caso a média das notas seja inferior a 6.

Retorne uma mensagem no seguinte formato:
---------------------------------------------------
'Aprovação, média: 7.7' ou 'Reprovação, média: 5.9'
---------------------------------------------------

*/

function weightedAverage(score1, score2, score3) {
  const weight1 = 3;
  const weight2 = 3;
  const weight3 = 4;

  const weightsSum = weight1 + weight2 + weight3;
  const numerator = score1 * weight1 + score2 * weight2 + score3 * weight3;
  const average = numerator / weightsSum;
  
  const averageText = `, média: ${average.toFixed(1)}`
  const situation = (average >= 6 ? 'Aprovação' : 'Reprovação');
  return situation + averageText;
}

module.exports = weightedAverage;
