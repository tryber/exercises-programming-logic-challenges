/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas, 
Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  // Desenvolva seu código nessa função
  return [...string].reduce((acc, cur) => {
    switch (cur) {
      case "a":
        acc += "5";
        return acc;
      case "e":
        acc += "b";
        return acc;
      case "i":
        acc += "9";
        return acc;
      case "o":
        acc += "p";
        return acc;
      case "u":
        acc += "1";
        return acc;
      default:
        acc += cur;
        return acc;
    }
  }, "");
}

module.exports = encodeMessage;
