// 11 - Triplica vogais
function triVowels(word) {
  let finalWord = "";
  for (let char of word) {
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        finalWord += char.repeat(3);
        break;
      default:
        finalWord += char;
    }
  }
  return finalWord;
}


// 12 - IMC
let imcWeight = 75;

let imcHeight = 1.78;

let imc = Number((imcWeight / (imcHeight * imcHeight)).toFixed(1));

let imcResult ;

if (imc < 18.5) {
  imcResult = 'Magreza';
} else if (imc < 24.9) {
  imcResult = 'Normal';
} else if (imc < 30) {
  imcResult = 'Sobrepeso';
} else {
  imcResult = 'Obesidade';
};

console.log('Seu IMC é: ' + imc + ' kg/m2');
console.log('Resultado: ' + imcResult);


// 13 - Pontos no Xadrez
let playerOne = 1400;
let playerTwo = 1700;

let winner = 1;

let difference = Math.abs(playerOne - playerTwo);

let smallDiff = 10;
let bigDiff = 20;

if(difference > 200){
  if(winner === 1){
    playerOne += smallDiff;
    playerTwo -= smallDiff;
  } else {
    playerOne -= smallDiff;
    playerTwo += smallDiff;
  } 
} else if (winner === 1) {
    playerOne += bigDiff;
    playerTwo -= bigDiff;
  } else {
    playerOne -= bigDiff;
    playerTwo += bigDiff;
}

console.log(`Jogador 1: ${playerOne} pontos; Jogador 2: ${playerTwo} pontos.`)


// 14 - Caixa eletrônico
let saldo = 100;
let saque = 70;

if (saque === 0 || typeof(saque) != 'number') {
  console.log('Valor de saque inválido');
} else if (saque > saldo) {
  console.log('Saldo insuficiente');
} else if(saque % 10 != 0) {
  console.log('Valor inválido para as notas disponíveis: R$10, R$50, R$100');
} else {
  saldo = saldo - saque;
  console.log(`Saque efetuado! Novo saldo: R$${saldo}`);
}


// 15 - Pedra,papel e tesoura
let person1 = 'scissors';
let person2 = 'stone'; 

if (person1 == 'paper' && person2 == 'stone'){
  console.log('Player 1 won');
} else if (person1 == 'stone' && person2 == 'scissors'){
  console.log('Player 1 won');
} else if (person1 == 'scissors' && person2 == 'paper'){
  console.log('Player 1 won');
} else if (person1 == person2){
  console.log('A Ties');
} else{
  console.log('Player 2 won');
}


// 16 - Imprima a idade em ordem crescente
let ageMarina = 18;
let ageSilvia = 16;
let ageIza = 19;
if(ageMarina <= ageSilvia && ageSilvia <= ageIza){
  console.log(ageMarina, ageSilvia, ageIza)
}
else{

  if (ageMarina <= ageIza && ageIza <= ageSilvia){
    console.log(ageMarina, ageIza, ageSilvia)
  }
  else{

    if (ageSilvia <= ageMarina && ageMarina <= ageIza){
      console.log(ageSilvia, ageMarina, ageIza)
    }
    else{

      if (ageSilvia <= ageIza && ageIza <= ageMarina){
        console.log(ageSilvia, ageIza, ageMarina)
      }
      else{

        if (ageIza <= ageMarina && ageMarina <= ageSilvia){
          console.log(ageIza, ageMarina, ageSilvia)
        }
        else{
          if (ageMarina == ageSilvia && ageSilvia == ageIza){
            console.log(ageMarina, ageSilvia, ageIza)
          }
          else{
            console.log(ageIza, ageSilvia, ageMarina)
          }
        }
      }
    }
  }
}


// 17 - Jogo do par ou ímpar
function verificaGanhador(dedosLucio, dedosAna, par) {
  let result = (dedosLucio + dedosAna) % 2;

  if (result === 0 && par === 1) {
    return 'Lucio venceu';
  } else if (result === 0 && par === 0) {
    return 'Ana venceu';
  } else if (result !== 0 && par === 1) {
    return 'Ana venceu';
  } else {
    return 'Lucio venceu';
  }
}


// 18 - Jogo de cartas
function jogoCartas(cartaMara1, cartaMara2, cartaSara1, cartaSara2) {

  let pontosMara = 0;
  let pontosSara = 0;

  function realizaCalculo(a, b) {
    if (a === b) return ((a + b) * 2);
    else if (a - b === 1 || a - b === -1) return ((a + b) * 3);
    else return a + b
  }

  pontosMara = realizaCalculo(cartaMara1, cartaMara2);
  pontosSara = realizaCalculo(cartaSara1, cartaSara2);

  if (pontosMara === pontosSara) return `O jogo empatou`;
  return pontosMara > pontosSara ? `Mara venceu com ${pontosMara} pontos` : `Sara venceu com ${pontosSara} pontos`

}
