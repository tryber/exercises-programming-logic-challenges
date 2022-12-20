/*

22 - Jogo do arremesso de peso

Você será responsável por desenvolver uma funcionalidade para calcular a pontuação de um jogo de arremesso de peso.

Considere as regras de pontuação listadas abaixo:
* A cada 1 metro de distância arremessado a pessoa jogadora recebe 1 ponto;
* A cada 5 metros de distância arremessado a pessoa jogadora recebe 2 pontos extras.

A partir da distância recebida por parâmetro,
calcule a pontuação final da pessoa jogadora e a retorne no formato:

-----------------------------------------
"A pontuação da pessoa jogadora foi de x"
-----------------------------------------

*/

function calculateScore(distance) {
  const onePointScore = distance;
  const fivePointScore = parseInt(distance / 5) * 2;
  const score = onePointScore + fivePointScore;
  return `A pontuação da pessoa jogadora foi de ${score}`;
}

module.exports = calculateScore;
