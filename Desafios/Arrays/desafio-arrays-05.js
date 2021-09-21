/*

05 - Encontre o filho mais velho

Dada a idade de Pedro e a idade de três de seus filhos, escreva um algoritmo que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.

A saída deve ter o seguinte formato: 'O filho mais velho tem "X" anos.'.

Considere as informações abaixo:
Pedro é pai de 4 filhos que têm idades diferentes. Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.

*/

function findOldestSon(pedroAge, arrKidsAges){
  // Desenvolva seu código aqui.
  return `O filho mais velho tem ${pedroAge - arrKidsAges.reduce((acc, cur) => acc + cur)} anos.`;
}

module.exports = findOldestSon;
