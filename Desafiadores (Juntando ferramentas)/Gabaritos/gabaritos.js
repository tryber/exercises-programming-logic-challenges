// 01 - Idade mínima da CNH
// Escreva uma função que recebe o nome e ano de nascimento de uma pessoa e retorne a frase:
// "(nome_da_pessoa) tem (idade) anos de idade e (pode ou não pode) iniciar o processo
// para obter CNH."

function canDriveOrNot(personName, birthYear) {
  let DriverAge = 2021 - birthYear;

  let canDrive = '';

  if (DriverAge >= 18) {
    canDrive = 'pode';
  } else {
    canDrive = 'não pode';
  }
  return (
    personName + ' tem ' + DriverAge + ' anos de idade e ' + canDrive + ' iniciar o processo para obter CNH.'
  );
}

// 02 - Raiz quadrada
//Crie um algoritmo que calcula a raiz quadrada de um número. 
//Caso a raiz seja exata (quadrados perfeitos), o programa deve informar seguindo o exemplo: "A raiz quadrada de 25 é: 5".
//Caso a raiz quadrada não seja exata, o programa deve informar seguindo o exemplo: "Não existe raiz exata para o número 30".
//Se o número informado for igual a zero ou não for um número, o algoritmo deve imprimir: "Número inválido" e encerrar o programa.

let tryNumber = 5;
let sqrt = Math.sqrt(tryNumber);

if (tryNumber === 0 || typeof(tryNumber) != 'number') {
  console.log('Número inválido.');
} else if (sqrt === Math.floor(sqrt)) {
  console.log(`A raiz quadrada de ${tryNumber} é: ${sqrt}.`);
} else {
  console.log(`Não existe raiz exata para o número ${tryNumber}.`);
};

// 03 - Array de notas musicais
// Uma música normalmente é uma sequência de notas.
// Dada a escala maior natural de Dó, cada uma das 7 notas possui um grau, representado por um algorismo romano:
// Dó Ré  Mi  Fá Sol Lá Si
// I  II  III IV  V  VI VII
// Escreva um código que recebe um array de notas, e retorna um array com os graus das notas na escala de dó.
// Ex: ['Ré', 'Sol', 'Dó'] -> ['II', 'V', 'I']

let firstMusicNotes = ['Ré', 'Sol', 'Dó'];

let firstAllDegrees = {
  Dó: "I",
  Ré: "II",
  Mi: "III",
  Fá: "IV",
  Sol: "V",
  Lá: "VI",
  Si: "VII",
}

let firstMusicDegrees = [];

for(let index = 0; index < firstMusicNotes.length; index += 1){
  let thisNote = firstMusicNotes[index];
  let thisDegree = firstAllDegrees[thisNote];

  firstMusicDegrees.push(thisDegree)
}

// 04 - Array de notas musicais - 2
// Uma música normalmente é uma sequência de notas.
// Dada a escala maior natural de Dó, cada uma das 7 notas possui:
// - um grau, representado por um algorismo romano
// - uma "terça" maior ou menor.
// - uma escala própria
// Nota     Dó     Ré      Mi      Fá     Sol        Lá     Si
// Grau     I      II      III     IV     V          VI     VII
// Terça    Maior  Menor   Menor   Maior  Maior      Menor  Menor
// Escala   Jônia  Dórica  Frígia  Lídia  Mixolídia  Eólia  Lócrio
// Escreva um código que recebe um array de notas, e retorna um array com um objeto com os graus, as terças das notas e as escalas.
// Ex: 
// Entrada: ['Ré', 'Sol', 'Dó']
// Saída:
// [
//   {
//     degree: 'II',
//     third: 'Menor',
//     scale: 'Dórica',
//   },
//   {
//     degree: 'V',
//     third: 'Maior',
//     scale: 'Mixolódia'
//   },
//   {
//     degree: 'I',
//     third: 'Maior',
//     scale: 'Jônia'
//   }
// ] 

let secondMusicNotes = ['Ré', 'Sol', 'Dó'];

let allNotesDetails = {
  Dó: {
    degree: 'I',
    third: 'Maior',
    scale: 'Jônia',
  },
  Ré: {
    degree: 'II',
    third: 'Menor',
    scale: 'Dórica',
  },
  Mi: {
    degree: 'III',
    third: 'Menor',
    scale: 'Frígia',
  },
  Fá: {
    degree: 'II',
    third: 'Maior',
    scale: 'Lídia',
  },
  Sol: {
    degree: 'II',
    third: 'Maior',
    scale: 'Mixolídia',
  },
  Lá: {
    degree: 'II',
    third: 'Maior',
    scale: 'Eólia',
  },
  Si: {
    degree: 'II',
    third: 'Maior',
    scale: 'Lócria',
  },
}

let secondMusicNotesDetails = [];

for(let index = 0; index < secondMusicNotes.length; index += 1){
  let thisNote = secondMusicNotes[index];
  let thisDetails = allNotesDetails[thisNote];

  secondMusicNotesDetails.push(thisDetails)
}

console.log(secondMusicNotesDetails)


// 05 - Varinhas mágicas
// Você foi a pessoa designada para escrever um novo sistema para Olivaras, o fabricante de varinhas.
// Como sabemos, a varinha escolhe o(a) bruxo(a), então, você deverá criar um código que receba o nome de um(a) bruxo(a) e a varinha que ele(a) está testando.
// Considere que o nome e a varinha recebidos serão da tabela a seguir.
//                Tabela de Escolha das Varinhas
//        Bruxo(a)                      Varinha
//     Harry Potter    ->    Azevinho e Pena de Fênix

//     Rony Weasley    ->  Salgueiro e Pelo de Unicórnio

//    Hermione Granger  ->   Videira e Fibra de Dragão

//    Alvo Dumbledore   ->  Salgueiro e Pelo de Testrálio

//   Belatriz Lestrange ->  Nogueira e Fibra de Dragão
// Caso a varinha escolha o(a) bruxo(a), de acordo com a tabela, retorne a mensagem:
// - "Curioso... muito curioso..."
// Caso contrário, retorne:
// - "Não, não! Decididamente, não!"
// Desafio: fazer com apenas um IF/ELSE

let wizard = 'Harry Potter';
let wand = 'Salgueiro e Pelo de Unicórnio';

let wizardsWands = {
  'Harry Potter': 'Azevinho e Pena de Fênix',
  'Rony Weasley': 'Salgueiro e Pelo de Unicórnio',
  'Hermione Granger': 'Videira e Fibra de Dragão',
  'Alvo Dumbledore': 'Salgueiro e Pelo de Testrálio',
  'Belatriz Lestrange': 'Nogueira e Fibra de Dragão',
}

if(wizardsWands[wizard] === wand){
  console.log('Curioso... muito curioso...')
} else {
  console.log('Não, não! Decididamente, não!')
}


// 06 - Calcule o preço
//  Faça um algoritmo para ler uma lista de produtos e retornar uma string contendo o 
//  produto com maior preço, o preço do produto e a média do preços dos produtos no seguinte formato:
//  A média de preços é R$$36.11. O produto mais caro é teclado gamer e custa: R$ 180.
// let productsList = [
//   { name: 'lápis', price: 2 },
//   { name: 'borracha', price: 4 },
//   { name: 'caneta', price: 5 },
//   { name: 'régua', price: 6 },
//   { name: 'apontador', price: 3 },
//   { name: 'teclado gamer', price: 180 },
//   { name: 'mochila', price: 33 },
//   { name: 'fone de ouvido', price: 57 },
//   { name: 'mousepad', price: 35 },
// ];

function calculateAverageAndExpensive(productList) {
  let maxPrice = productList[0].price;
  let maxProduct = '';

  let total = 0;

  for (let index = 0; index < productList.length; index += 1) {
    total += productList[index].price;
    if (productList[index].price > maxPrice) {
      maxPrice = productList[index].price;
      maxProduct = productList[index].name;
    }
  }

  let averagePrice = (total / productList.length).toFixed(2);

  return `A média de preços é R$${averagePrice}. O produto mais caro é ${maxProduct} e custa: R$ ${maxPrice}`;
}


// 07 - Calcule a média dos graus Celsius e Fahrenheit
// Escreva uma função que receba uma lista com a média das temperaturas em Fahrenheit registradas no 
// ano e retorne a média da temperatura em Celsius no seguinte formato:
// A média anual de temperatura em graus Celsius é 30.05
// let tempRegister = [98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80];

function averageTemperature(anualRegister) {
  let total = 0;
  for (let index = 0; index < anualRegister.length; index += 1) {
    total += anualRegister[index];
  }
  let average = total / anualRegister.length;

  const averageConverted = ((5 * (average - 32)) / 9).toFixed(2);

  console.log('A média anual de temperatura em graus Celsius é ' + averageConverted);
}


// 08 - O número de empates na Copa das galáxias
// Uma Copa de futebol de botão está sendo realizada com equipes de toda a galáxia. 
// A classificação dessa Copa é baseada no número de pontos ganhos pelas equipes, e a distribuição de pontos é feita da forma usual. Ou seja, quando uma equipe ganha um jogo, ela recebe 3 pontos; se o jogo termina empatado, ambas as equipes recebem 1 ponto; e a equipe perdedora não recebe nenhum ponto.
// Com base na classificação atual das equipes e o número de equipes participantes na Copa de futebol de botão, sua tarefa é determinar quantos jogos terminaram empatados até o momento.
// A função `calcNumberOfTies`, recebe 2 valores por parâmetro, sendo o primeiro parâmetro a quantidade de partidas jogadas (exemplo: t1 vs t2 + t2 vs t3 = 2 partidas jogadas) e o segundo parâmetro um objeto, onde as chaves são os nomes dos times e os valores são as pontuações de cada time.

function calcNumberOfTies(matches, score) {
  const sumPoints = Object.values(score).reduce((sum, number) => sum + number);
  const winPoints = 3;
  return winPoints * matches - sumPoints;
}


// 09 - Programas de TV
// Você foi a pessoa designada para classificar programas de TV para pessoas telespectadoras. 
// Inicialmente você possui um objeto com 3 atributos: idade (int), país (string), gostaDeEsportes (bool)
// Se a pessoa possuir mais de 16 anos, ela poderá assistir 'UFC' caso goste de esportes e more no brasil; ou poderá assistir 'The Simpsons' caso não goste de esportes e more em outro país.
// Se a pessoa possuir menos de 16 anos e morar no Chile, ela poderá assistir 'The Penguins of Madagascar', se não gostar de esportes; ou poderá assistir 'sport fishing' caso goste de esportes e more em outro país.
// Caso a pessoa não se enquadre nessas categorias acima, informe que não foi possível dizer o que ela deve assistir.

const personWatching = {
  age: 19,
  country: 'Brasil',
  likeSports: true,
};

if (personWatching.age > 16) {
  if (personWatching.likeSports) {
      if (personWatching.country === 'Brasil') {
          console.log('Watch UFC');
      }
      else {
          console.log('I don\'t know what you must to watch');
      }        
  }
  else {
      if(personWatching.country === 'Brasil') {
          console.log('I don\'t know what you must to watch');
      }
      else {
          console.log('Watch The Simpsons');
      }
  }
}
else {
  if (!personWatching.likeSports) {
      if(personWatching.country === 'Chile') {
          console.log('Watch The Penguins of Madagascar');
      }
      else {
          console.log('I don\'t know what you must to watch');
      }
  }
  else {
      if(personWatching.country === 'Chile') {
          console.log('I don\'t know what you must to watch');
      }
      else {
          console.log('Watch Sport Fishing');
      }
  }
}