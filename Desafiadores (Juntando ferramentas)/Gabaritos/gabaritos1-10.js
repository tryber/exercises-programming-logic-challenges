// 01 - Idade mínima da CNH
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
function calcNumberOfTies(matches, score) {
  const sumPoints = Object.values(score).reduce((sum, number) => sum + number);
  const winPoints = 3;
  return winPoints * matches - sumPoints;
}


// 09 - Programas de TV
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


// 10 - Nega Números
function negateNumbers(arrayNumbers) {
  return arrayNumbers.map((number) => number * -1);
}

function negateNumbers2(arrayNumbers) {
  const finalArray = [];
  for (let element of arrayNumbers) {
    finalArray.push(element * -1);
  }
  return finalArray;
}
