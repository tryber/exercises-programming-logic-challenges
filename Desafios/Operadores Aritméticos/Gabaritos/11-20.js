/*  11 - Loja de ração */
function paymentOptions(price) {
  let cash = price * 0.9;
  let creditCard = (price * 1.15) / 4;

  return `À vista: R$${cash} ou 4 x de: R$${creditCard}.`;
}

/* 12 - Peso e preço do prato */
function weightAndValue(price, gram) {
  let totalPrice = ((price * gram) / 1000).toFixed(2);
  return "O prato de " + gram + " gramas" + " custa: R$" + totalPrice + "."
}

function generateOneColor() {
  let uniqueColor = Math.floor(Math.random() * 256);
  return uniqueColor;
}

/*  13 - Cor aleatória */
function randomRGBColor() {
  let finalColor = `rgb(${generateOneColor()}, ${generateOneColor()}, ${generateOneColor()})`;
  return finalColor;
}

/*  14 - Tempo de viagem */
function timeTravel(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  return (
    "A viagem terá duração de " +
    hours +
    " hora(s) e " +
    minutes +
    " minuto(s)."
  );
}

/*  15 - Área de uma circunferência */
function areaCircle(diameter) {
  let radius = diameter / 2;
  let area = Math.PI * Math.pow(radius, 2);
  return `A circumferência de raio ${radius} cm possui uma área de ${area.toFixed(
    2
  )} cm²`;
}

/*  16 - Verdadeiro ou falso? */
function randomBoolean() {
  return Math.random() >= 0.5;
}

/*  17 - Financiamento de veículo */
function carFinancing(carPrice, entranceValue, quota) {
  let financing = carPrice - entranceValue;
  let tax = 0.05;
  return (
    "Valor Financiado: R$" +
    financing +
    "Valor do Juros: R$" +
    financing * tax +
    "Quantidade de Parcelas: " +
    quota +
    "Valor da Parcela: R$" +
    ((financing * tax + financing) / quota).toFixed(2) +
    "Valor Total do Carro: R$" +
    (financing * tax + financing + entranceValue)
  );
}

/* 18 - Simulação de dado RPG */
function rollDice(diceSide) {
  let numberRolled = Math.floor(Math.random() * Number(diceSide) + 1);
  return numberRolled;
}

/* 19 - Viagem de carro */
function carTrip(spBh, bhSal, salNat) {
  let totalHours = spBh + bhSal + salNat;
  let days = totalHours / 24;

  return days.toPrecision(3);
}

/*  20 - Aprovado ou reprovado? */
function avaliador(score1, score2, score3) {
  let averageScore = (score1 + score2 + score3) / 3;

  if (averageScore > 6) {
    "Aprovação, média: " + averageScore;
  } else {
    "Reprovação, média: " + averageScore;
  }
}

module.exports = {
  paymentOptions,
  weightAndValue,
  randomRGBColor,
  timeTravel,
  areaCircle,
  randomBoolean,
  carFinancing,
  rollDice,
  carTrip,
  avaliador,
};
