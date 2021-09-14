// 01 - Verificar se pessoa tem idade para dar entrada na CNH.
function checkCnhProcess(name, birthYear) {
  let currentYear = new Date().getFullYear();

  let age = currentYear - birthYear;

  let check = "";

  if (age >= 18) {
    check = "pode";
  } else {
    check = "não pode";
  }
  return `${name} tem ${age} anos de idade e ${check} iniciar o processo.`;
}

//02 - Calcula a raiz quadrada de um número
function calcSquareRoot(number) {
  const sqrt = Math.sqrt(number);

  if (number === 0 || typeof number != "number") {
    return "Número inválido.";
  } else if (sqrt === Math.floor(sqrt)) {
    return `A raiz quadrada de ${number} é: ${sqrt}.`;
  } else {
    return `Não existe raiz exata para o número ${number}.`;
  }
}

// 03 - Array de notas musicais
function arrMusicalNotes(arrNotes) {
  let firstAllDegrees = {
    Dó: "I",
    Ré: "II",
    Mi: "III",
    Fá: "IV",
    Sol: "V",
    Lá: "VI",
    Si: "VII",
  };

  let firstMusicDegrees = [];

  for (let index = 0; index < arrNotes.length; index += 1) {
    let thisNote = arrNotes[index];
    let thisDegree = firstAllDegrees[thisNote];

    firstMusicDegrees.push(thisDegree);
  }

  return firstMusicDegrees;
}

// 04 - Array de notas musicais - 2
function arrMusicalNotes2(arrNotes) {
  let allNotesDetails = {
    Dó: {
      degree: "I",
      third: "Maior",
      scale: "Jônia",
    },
    Ré: {
      degree: "II",
      third: "Menor",
      scale: "Dórica",
    },
    Mi: {
      degree: "III",
      third: "Menor",
      scale: "Frígia",
    },
    Fá: {
      degree: "IV",
      third: "Maior",
      scale: "Lídia",
    },
    Sol: {
      degree: "V",
      third: "Maior",
      scale: "Mixolídia",
    },
    Lá: {
      degree: "VI",
      third: "Maior",
      scale: "Eólia",
    },
    Si: {
      degree: "VII",
      third: "Maior",
      scale: "Lócria",
    },
  };

  let secondMusicNotesDetails = [];

  for (let index = 0; index < arrNotes.length; index += 1) {
    let thisNote = arrNotes[index];
    let thisDetails = allNotesDetails[thisNote];

    secondMusicNotesDetails.push(thisDetails);
  }

  return secondMusicNotesDetails;
}

// 05 - Varinhas mágicas
function findMagicWand(wizard, wand) {
  let wizardsWands = {
    "Harry Potter": "Azevinho e Pena de Fênix",
    "Rony Weasley": "Salgueiro e Pelo de Unicórnio",
    "Hermione Granger": "Videira e Fibra de Dragão",
    "Alvo Dumbledore": "Salgueiro e Pelo de Testrálio",
    "Belatriz Lestrange": "Nogueira e Fibra de Dragão",
  };

  if (wizardsWands[wizard] === wand) {
    return "Curioso... muito curioso...";
  } else {
    return "Não, não! Decididamente, não!";
  }
}

// 6 - Analise de preços da lista de compras
function calcAverageAndExpensive(productList) {
  let maxPrice = productList[0].price;
  let maxProduct = "";

  let total = 0;

  for (let index = 0; index < productList.length; index += 1) {
    total += productList[index].price;
    if (productList[index].price > maxPrice) {
      maxPrice = productList[index].price;
      maxProduct = productList[index].name;
    }
  }

  let averagePrice = (total / productList.length).toFixed(2);

  return `O produto mais caro é ${maxProduct} e custa: R$ ${maxPrice}, a média de preços dos produtos é de: R$${averagePrice}.`;

}

// 07 - Calcule a média dos graus Celsius e Fahrenheit
function averageTemperature(anualRegister) {
  let total = 0;
  for (let index = 0; index < anualRegister.length; index += 1) {
    total += anualRegister[index];
  }
  let average = total / anualRegister.length;

  const averageConverted = ((5 * (average - 32)) / 9).toFixed(2);

  return "A média anual de temperatura em graus Celsius é " + averageConverted+"."
}

// // 08 - O número de empates na Copa das galáxias
// function calcNumberOfTies(matches, score) {
//   const sumPoints = Object.values(score).reduce((sum, number) => sum + number);
//   const winPoints = 3;
//   return winPoints * matches - sumPoints;
// }

// // 09 - Programas de TV
// const personWatching = {
//   age: 19,
//   country: "Brasil",
//   likeSports: true,
// };

// if (personWatching.age > 16) {
//   if (personWatching.likeSports) {
//     if (personWatching.country === "Brasil") {
//       console.log("Watch UFC");
//     } else {
//       console.log("I don't know what you must to watch");
//     }
//   } else {
//     if (personWatching.country === "Brasil") {
//       console.log("I don't know what you must to watch");
//     } else {
//       console.log("Watch The Simpsons");
//     }
//   }
// } else {
//   if (!personWatching.likeSports) {
//     if (personWatching.country === "Chile") {
//       console.log("Watch The Penguins of Madagascar");
//     } else {
//       console.log("I don't know what you must to watch");
//     }
//   } else {
//     if (personWatching.country === "Chile") {
//       console.log("I don't know what you must to watch");
//     } else {
//       console.log("Watch Sport Fishing");
//     }
//   }
// }

// // 10 - Nega Números
// function negateNumbers(arrayNumbers) {
//   return arrayNumbers.map((number) => number * -1);
// }

// function negateNumbers2(arrayNumbers) {
//   const finalArray = [];
//   for (let element of arrayNumbers) {
//     finalArray.push(element * -1);
//   }
//   return finalArray;
// }

module.exports = {
  checkCnhProcess,
  calcSquareRoot,
  arrMusicalNotes,
  arrMusicalNotes2,
  findMagicWand,
  calcAverageAndExpensive,
  averageTemperature,
  // calcNumberOfTies,
  // negateNumbers,
  // negateNumbers2,
};
