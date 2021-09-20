/* 21 - Média ponderada */
function weightedAverage(score1, score2, score3) {
  let averageScore = (score1 * 3 + score2 * 3 + score3 * 4) / 10;

  if (averageScore > 6) {
    return "Aprovação, média: " + averageScore;
  } else {
    return "Reprovação, média: " + averageScore;
  }
}

/*  22 - Jogo do arremesso de peso */
function calculateScore(distance) {
  let addScore = Math.trunc((distance / 5) * 2);
  let totalScore = Math.trunc(distance + addScore);

  return `A pontuação do jogador foi de ${totalScore}`;
}

/*  23 - Divisões sucessivas */
function successiveDivisions(myNumber, count) {
  for (count; myNumber >= 1; count = count + 1) {
    myNumber = myNumber / 2;
  }
  return "Quantidade total de divisões: " + (count - 1);
}

module.exports = {
  weightedAverage,
  calculateScore,
  successiveDivisions,
}