/*  11 - Loja de ração */
function formatBrazilianMoney(number) {
  const beforeComma = Math.floor(number);
  let afterComma = Math.round(number * 100 - beforeComma * 100);
  afterComma = afterComma !== 0 ? afterComma : `00`;
  return `${beforeComma},${afterComma}`;
}
function paymentOptions(price) {
  let inCash = price - price * 0.1;
  let creditCard = price + price * 0.15;
  return `À Vista: R$${inCash} ou 4x de: R$${Math.round((creditCard / 4 * 100)) / 100}`;
}

/* 12 - Peso e preço do prato */
function weightAndValue(priceKg, plateWeight) {
  let totalPrice = ((priceKg * plateWeight) / 1000).toFixed(2).replace('.', ',');
  return `O prato de ${plateWeight} gramas custa: R$ ${totalPrice}`;
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
    " minuto(s)"
  );
}

/*  15 - Área de uma circunferência */
function areaCircle(diameter) {
  let radius = diameter / 2;
  let area = Math.PI * Math.pow(radius, 2);
  return `A circunferência de raio ${radius} cm possui uma área de ${area.toFixed(
    2
  )} cm quadrados`;
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
    formatBrazilianMoney(financing) +
    ";\nValor do Juros: R$" +
    formatBrazilianMoney(financing * tax) +
    ";\nQuantidade de Parcelas: " +
    quota +
    ";\nValor da Parcela: R$" +
    formatBrazilianMoney((financing * tax + financing) / quota) +
    ";\nValor Total do Carro: R$" +
    formatBrazilianMoney(financing * tax + financing + entranceValue) + '.'
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

  return parseFloat(days.toFixed(3));
}

/*  20 - Aprovado ou reprovado? */
function avaliador(score1, score2, score3) {
  let averageScore = Math.round((score1 + score2 + score3) / 3);

  if (averageScore >= 6) {
    return "Aprovação, média: " + averageScore;
  }
  return "Reprovação, média: " + averageScore;
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
