/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  if (names.indexOf(guest) == -1) {
    return "O nome não está na lista."
  } else {
    return "O nome está na lista."
  }
}

module.exports = findGuest;
