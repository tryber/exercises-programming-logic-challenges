// 21 - Média ponderada
let score1 = 5
let score2 = 5
let score3 = 10

let averageScore = ((score1 * 3)+ (score2 * 3) + (score3 * 4)) / 10;

if (averageScore > 6){
  console.log('Aprovação, média: ' + averageScore);
} else {
  console.log('Reprovação, média: ' + averageScore);
}


// 22 - Jogo do arremesso de peso
function calculaPontuacao(distancia) {
  let pontosAdicionais = Math.trunc((distancia / 5) * 2);
  let totalPontos = Math.trunc(distancia + pontosAdicionais);

  return `A pontuação do jogador foi de ${totalPontos}`;
}


// 23 - Divisões sucessivas
let myNumber = 20;
let count = 1;

for(count ; myNumber >= 1; count = count + 1){
  myNumber = myNumber/2;
  console.log(count + 'a divisão, resultado: ' + myNumber);
}

console.log('Quantidade total de divisões: ' + (count - 1));
