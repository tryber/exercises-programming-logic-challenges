/* 21 - Média ponderada */
function weightedAverage(score1, score2, score3) {
  let averageScore = parseFloat((score1 * 0.3 + score2 * 0.3 + score3 * 0.4).toFixed(2));

  if (averageScore >= 6) {
    return "Aprovação, média: " + averageScore;
  } else {
    return "Reprovação, média: " + averageScore;
  }
}

/*  22 - Jogo do arremesso de peso */
function calculateScore(distance) {
  let addScore = Math.trunc((distance / 5)) * 2;
  let totalScore = Math.trunc(distance + addScore);

  return `A pontuação da pessoa jogadora foi de ${totalScore}`;
}

/*  23 - Divisões sucessivas */
function successiveDivisions(number) {
  let count;
  for (count = 0; number >= 1; count = count + 1) {
    number = number / 2;
  }
  return "Quantidade total de divisões: " + count;
}

module.exports = {
  weightedAverage,
  calculateScore,
  successiveDivisions,
}
