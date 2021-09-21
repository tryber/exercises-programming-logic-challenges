/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo, se todos forem retorne true, se não retorne false.

*/

function dataType(arrDataTypes){
  // Desenvolva seu código aqui.
  return arrDataTypes.every((e) => typeof e === typeof arrDataTypes[0]);
}

module.exports = dataType;
