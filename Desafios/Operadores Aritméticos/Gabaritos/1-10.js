/* 01 - Calcular a média */
function average(number1, number2, number3) {
  let average = (number1 + number2 + number3) / 3;
  return "O Valor médio é: " + average;
}

/*  02 - Calcular o salário  */
function totalReceive(salary, sales) {
  let commissionPercentage = 0.04;
  let commission = sales * commissionPercentage;

  let total = commission + salary;

  return "A comissão é: " + commission + " e o ganho total é: " + total;
}

/* 03 - Antecessor e Sucessor */
function showNeighbors(number) {
  let previous = number - 1;
  let next = number + 1;
  return (
    "O antecessor de " + number + " é " + previous + " e seu sucessor é " + next
  );
}

/*  04 - Potência de um número */
function powerNumber(base, exponent) {
  return base ** exponent;
}

/* 05 - Área de um triângulo */
function triangleArea(base, height) {
  let area = (base * height) / 2;
  return (
    "A área do triângulo de base " +
    base +
    " e altura " +
    height +
    " é: " +
    area
  );
}

/* 06 - Calcular IMC */
function IMC(weight, height) {
  let imc = (height * height) / weight;
  return imc;
}

/*  07 - Calcule quanto tempo de leitura */
function readingTime(totalPages, readPages, minutes) {
  let totalMinutes = (totalPages * minutes) / readPages;
  return "Ana levará " + totalMinutes + " minutos para ler o livro todo";
}

/*  08 - Conta do restaurante */
function restaurantExpenses(account){
  let total = (account * 1.1) * 1.05;
  return +total.toFixed(2);
}


/*  09 - Celsius */
function celsiusToFahrenheit(celsius){
  let fahrenheit = (celsius / 5) * 9 + 32;
  return fahrenheit;
}

/* 10 - Fahrenheit */
function fahrenheitToCelsius(fahrenheit){
  let celsius = +((5 * (fahrenheit - 32)) / 9).toFixed(2);
  return celsius;
}

module.exports = {
  average,
  totalReceive,
  showNeighbors,
  powerNumber,
  triangleArea,
  IMC,
  readingTime,
  restaurantExpenses,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
}
