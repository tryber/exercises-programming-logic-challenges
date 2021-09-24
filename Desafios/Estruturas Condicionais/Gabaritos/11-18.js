/*  11 - Triplica vogais */
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

/*  12 - IMC */
function IMC(weight, height) {
  let imc = Number((weight / (height * height)).toFixed(1));

  let result;

  if (imc < 18.5) {
    result = "Magreza";
  } else if (imc < 24.9) {
    result = "Normal";
  } else if (imc < 30) {
    result = "Sobrepeso";
  } else {
    result = "Obesidade";
  }

  return "Seu IMC é: " + imc + " kg/m2." + " O Resultado foi: " + result;
}

/*  13 - Pontos no Xadrez */
function chessRating(ratingPlayOne,ratingPlayTwo) {
  let winner = 1;

  let difference = Math.abs(ratingPlayOne -ratingPlayTwo);

  let smallDiff = 10;
  let bigDiff = 20;

  if (difference > 200) {
    if (winner === 1) {
      ratingPlayOne += smallDiff;
     ratingPlayTwo -= smallDiff;
    } else {
      ratingPlayOne -= smallDiff;
     ratingPlayTwo += smallDiff;
    }
  } else if (winner === 1) {
    ratingPlayOne += bigDiff;
   ratingPlayTwo -= bigDiff;
  } else {
    ratingPlayOne -= bigDiff;
   ratingPlayTwo += bigDiff;
  }

  return `Enxadrista1: ${ratingPlayOne} pontos. Enxadrista2: ${ratingPlayTwo} pontos.`;
}

/* 14 - Caixa eletrônico */
function ATM(balance, withdrew) {
  if (withdrew === 0 || typeof withdrew != "number") {
    return "Valor de saldo inválido";
  } else if (withdrew > balance) {
    return "Saldo insuficiente";
  } else if (withdrew % 10 != 0) {
    return "Valor inválido para as notas disponíveis: R$10, R$50, R$100";
  } else {
    balance = balance - withdrew;
    return `Saque efetuado! Novo saldo: R$${balance}`;
  }
}

/* 15 - Pedra,papel e tesoura */
function rockPaperScissors(signPerson1, signPerson2) {
  if (signPerson1 == "paper" && signPerson2 == "rock") {
    return "Player 1 won";
  } else if (signPerson1 == "rock" && signPerson2 == "scissors") {
    return "Player 1 won";
  } else if (signPerson1 == "scissors" && signPerson2 == "paper") {
    return "Player 1 won";
  } else if (signPerson1 == signPerson2) {
    return "A Ties";
  } else {
    return "Player 2 won";
  }
}

/*  16 - Imprima a idade em ordem crescente */
function sortAgeAsc(mariaAge, silviaAge, izaAge) {
  if (mariaAge <= silviaAge && silviaAge <= izaAge) {
    return `${mariaAge}, ${silviaAge}, ${izaAge}`;
  } else {
    if (mariaAge <= izaAge && izaAge <= silviaAge) {
      return `${mariaAge}, ${izaAge}${silviaAge}`;
    } else {
      if (silviaAge <= mariaAge && mariaAge <= izaAge) {
        return `${silviaAge}, ${mariaAge}, ${izaAge}`;
      } else {
        if (silviaAge <= izaAge && izaAge <= mariaAge) {
          return `${silviaAge}, ${izaAge}, ${mariaAge}`;
        } else {
          if (izaAge <= mariaAge && mariaAge <= silviaAge) {
            return `${izaAge}, ${mariaAge}, ${silviaAge}`;
          } else {
            if (mariaAge == silviaAge && silviaAge == izaAge) {
              return `${mariaAge}, ${silviaAge}, ${izaAge}`;
            } else {
              return `${izaAge}, ${silviaAge}, ${mariaAge}`;
            }
          }
        }
      }
    }
  }
}

// 17 - Jogo do par ou ímpar
function oddOreEven(lucioFingers, anaFingers, even) {
  let result = (lucioFingers + anaFingers) % 2;

  if (result === 0 && even === 1) {
    return "Lúcio venceu";
  } else if (result === 0 && even === 0) {
    return "Ana venceu";
  } else if (result !== 0 && even === 1) {
    return "Ana venceu";
  } else {
    return "Lúcio venceu";
  }
}

/*  18 - Jogo de cartas */
function cardsGame(maraCard1, maraCard2, saraCard1, saraCard2) {
  let maraScore = 0;
  let saraScore= 0;

  function calc(a, b) {
    if (a === b) return (a + b) * 2;
    else if (a - b === 1 || a - b === -1) return (a + b) * 3;
    else return a + b;
  }

  maraScore = calc(maraCard1, maraCard2);
  saraScore = calc(saraCard1, saraCard2);

  if (maraScore === saraScore) return `O jogo empatou`;
  return maraScore > saraScore
    ? `Mara venceu com ${maraScore} pontos`
    : `Sara venceu com ${saraScore} pontos`;
}

module.exports = {
  triVowels,
  IMC,
  chessRating,
  ATM,
  rockPaperScissors,
  sortAgeAsc,
  oddOreEven,
  cardsGame,
}
