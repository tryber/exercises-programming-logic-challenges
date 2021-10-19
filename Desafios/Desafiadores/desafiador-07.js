/*

07 - Calcule a média dos graus Celsius em Fahrenheit

Escreva uma algoritmo que recebe uma lista com a média de temperatura em Fahrenheit registradas nos últimos 12 meses e retorne uma mensagem informando a média em Celsius no formato da saída.

Poor exemplo:
-------------------------------------------------------
Entrada:
[98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80]

Saída:
"A média anual de temperatura em graus Celsius é 30.05."
--------------------------------------------------------

*/

function averageTemperature(anualRegister){
  let celsiusTable = []
  let celsiusMedia = 0
  anualRegister.forEach(register => {
    celsiusTable.push((register -32) * (5/9))
  });
  celsiusTable.forEach(celsiusTemp => {
    celsiusMedia += celsiusTemp
  });
  celsiusMedia = celsiusMedia / (celsiusTable.length)
  return `A média anual de temperatura em graus Celsius é ${(celsiusMedia).toFixed(2)}.`
}

module.exports = averageTemperature;
