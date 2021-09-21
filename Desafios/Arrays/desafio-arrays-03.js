/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne a seguinte mensagem: 'O nome está na lista.', se não: 'O nome não está na lista.'

*/

function findGuest(arrNames, guest){
  // Desenvolva seu código nessa função
  const check = arrNames.includes(guest);
  return check ? 'O nome está na lista.' : 'O nome não está na lista.'
}

module.exports = findGuest;
