/*

06 - Calcular IMC

André resolveu criar seu próprio programa de cálculo de Índice de Massa Corporal (IMC).

Considere  que:
* A fórmula para calcular o IMC é divisão da altura ao quadrado (em metros) pelo peso (em kg);
* André pesa 75 kg e sua altura é 1,80 m;

Escreva o algoritmo usado por André para calcular seu próprio IMC e o retorne.

*/

function IMC(weight, height){
  return weight / (height * height);
}

module.exports = IMC;
