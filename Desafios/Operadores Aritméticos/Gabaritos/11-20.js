/*  11 - Loja de ração */
function showPaymentOptions(dogFoodPrice) {
  let inCash = dogFoodPrice - dogFoodPrice * 0.1;
  let creditCard = dogFoodPrice + dogFoodPrice * 0.15;
  return (
    "Preço do produto: R$" +
    dogFoodPrice +
    "- À Vista: R$" +
    inCash +
    ("- 4x de: R$" + creditCard / 4)
  );
}

/* 12 - Peso e preço do prato */
function weightAndValue(priceKg, plateWeight) {
  let totalPrice = ((priceKg * plateWeight) / 1000).toFixed(2);
  return "Peso: " + plateWeight + " gramas" + "Valor: R$" + totalPrice;
}

/*  13 - Cor aleatória */
function generateOneColor() {
  let uniqueColor = Math.floor(Math.random() * 256);
  return uniqueColor;
}

function randomRGBColor() {
  let finalColor = `rgb(${generateOneColor()}, ${generateOneColor()}, ${generateOneColor()})`;
  return finalColor;
}

/*  14 - Tempo de viagem */
function calculateHoursAndMinutes(totalMinutes) {
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
function vehicleFinancing(carPrice, entranceValue, quota) {
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
function checkApproved(score1, score2, score3){
  let averageScore = (score1 + score2 + score3) / 3;
  
  if (averageScore > 6) {
    "Aprovação, média: " + averageScore;
  } else {
    "Reprovação, média: " + averageScore;
  }
}

module.exports ={
  showPaymentOptions,
  weightAndValue,
  generateOneColor,
  calculateHoursAndMinutes,
  areaCircle,
  randomBoolean,
  vehicleFinancing,
  rollDice,
  carTrip,
  checkApproved,
}


