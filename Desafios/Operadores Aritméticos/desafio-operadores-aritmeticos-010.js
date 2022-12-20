/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

function fahrenheitToCelsius(fahrenheit){
  const temperatureInCelcius = (fahrenheit - 32) * 5 / 9;
  return Number(temperatureInCelcius.toFixed(2));
}

module.exports = fahrenheitToCelsius;
