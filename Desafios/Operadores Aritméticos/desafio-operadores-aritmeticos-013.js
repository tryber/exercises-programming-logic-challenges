/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

const randomRGBNumber = () => {
  const rbgNumberMax = 256;
  return Math.floor(Math.random() * (rbgNumberMax + 1));
};

function generateColor(){
  const red = randomRGBNumber();
  const blue = randomRGBNumber();
  const green = randomRGBNumber();
  return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = generateColor;
