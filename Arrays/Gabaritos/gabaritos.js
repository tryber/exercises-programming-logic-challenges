// 01- Maior número :
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MAIOR número da lista.

const maxNumbers = [3, 1, 8, 34, 13, 2, 5];

let maxNumber = maxNumbers[0];

for (let index = 0; index < maxNumbers.length; index += 1) {
  if (maxNumbers[index] > maxNumber) {
    maxNumber = maxNumbers[index];
  }
}


//02 - Menor número
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MENOR número da lista.

const minNumbers = [3, 1, 8, 34, 13, -5, 2, 5];

let minNumber = minNumbers[0];

for (let index = 0; index < minNumbers.length; index += 1) {
  if (minNumbers[index] < minNumber) {
    minNumber = minNumbers[index];
  }
}

// 03 - Descubra se o nome esta em um array
// Crie um algoritmo que verifica se o nome da Mica está dentro do array de pessoas facilitadoras da Trybe. 
// let facilitators  = [Silvia, Isa, Marina, Mica, Amanda, Karine]
// Seu algoritmo deve exibir a mensagem "O nome da Mica está no array." Caso contrário, exiba "Não faz parte". 

let facilitators = ['Silvia', 'Isa', 'Marina', 'Mica', 'Amanda', 'Karine'];
let foundMica = false;
for(let index = 0; index < facilitators.length; index += 1) {
  if(facilitators[index] == 'Mica'){
    foundMica = true;
  }
}

if(foundMica == true){
  console.log('O nome da Mica está no array.')
}
else {
  console.log('Não faz parte.')
}

// 04 - Todos do mesmo tipo?
// Elabore uma função que verifica se todos os elementos de um array são do mesmo tipo.
// A função deve retornar true ou false.

function verifyAllElements(array) {
  const typeOfFirst = typeof array[0];
  for (let elements of array) {
    if (typeOfFirst !== typeof elements) {
      return false;
    }
  }
  return true;
}

// 05 - Idade do filho mais velho
// Pedro é pai de 4 filhos que têm idades diferentes. Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele. 
// Dada a idade de Pedro e a idade de três de seus filhos, crie um programa para computar e imprimir a idade do filho mais velho de Pedro.
// A saída deve ser da seguinte forma: 'O filho mais velho tem X anos'

function oldestSon(pedroAge, kidsAges) {
  let sumkidsAges = 0;

  kidsAges.forEach((kid) => {
    sumkidsAges += kid;
  });

  let olderKidAge = (pedroAge - sumkidsAges);
  kidsAges.push(olderKidAge);

  let olderKid = Math.max(...kidsAges);

  return `O filho mais velho tem ${olderKid} anos`;
}
