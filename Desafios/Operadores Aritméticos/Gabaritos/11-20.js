// 11 - Loja de raçãoLoja de ração
let dogFoodPrice = 100;

let inCash = dogFoodPrice - (dogFoodPrice * 0.1);

let creditCard = dogFoodPrice + (dogFoodPrice * 0.15);

console.log('Preço do produto: R$' + dogFoodPrice);
console.log('- À Vista: R$' + inCash);
console.log('- 4x de: R$' + creditCard / 4);


// 12 - Peso e preço do prato
let priceKg = 37.90;
let plateWeight = 735;

let totalPrice = ((priceKg * plateWeight) / 1000).toFixed(2);

console.log('Peso: ' + plateWeight + ' gramas');
console.log('Valor: R$' + totalPrice);


// 13 - Cor aleatória
function generateOneColor() {
  const uniqueColor = Math.floor(Math.random() * 256);
  return uniqueColor;
}

function randomRGBColor() {
  const finalColor = `rgb(${generateOneColor()}, ${generateOneColor()}, ${generateOneColor()})`;

  return finalColor;
}


// 14 - Tempo de viagem
function calculateHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return 'A viagem terá duração de ' + hours +  ' hora(s) e ' + minutes + ' minuto(s).';
}


// 15 - Área de uma circunferência
const diameter = 10;
const radius = diameter / 2;
const area = Math.PI * Math.pow(radius, 2);

console.log(`A circumferência de raio ${ radius } cm possui uma área de ${ area.toFixed(2) } cm²`);


// 16 - Verdadeiro ou falso?
function randomBoolean() {
  return Math.random() >= 0.5;
}


// 17 - Financiamento de veículo
let carPrice = 45000;
let entranceValue = 10000;
let quota = 36;
let financing = carPrice - entranceValue;
let tax = 0.05;

console.log('Valor Financiado: R$' + financing);
console.log('Valor do Juros: R$' + (financing * tax));
console.log('Quantidade de Parcelas: ' + quota);
console.log('Valor da Parcela: R$' + (((financing * tax) + financing) / quota).toFixed(2));
console.log('Valor Total do Carro: R$' + ((financing * tax) + financing + entranceValue));


// 18 - Simulação de dado rpg
function rollDice(diceSide) {
  let numberRolled = Math.floor(Math.random() * Number(diceSide) + 1);
  return numberRolled;
}


// 19 - Viagem de carro
let spBh = 7.23;
let bhSal = 19.57;
let salNat = 15.32;

let totalHours = spBh + bhSal + salNat;
var days = totalHours / 24;

console.log(days.toPrecision(3));


// 20 - Aprovado ou reprovado?
let score1 = 5
let score2 = 5
let score3 = 10

let averageScore = (score1 + score2 + score3) / 3;

if (averageScore > 6){
  console.log('Aprovação, média: ' + averageScore);
} else {
  console.log('Reprovação, média: ' + averageScore);
}
