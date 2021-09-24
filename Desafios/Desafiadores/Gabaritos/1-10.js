/*  01 - Verificar se pessoa tem idade para dar entrada na CNH. */
function cnhProcess(name, birthYear) {
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

/*  02 - Calcula a raiz quadrada de um número */
function squareRoot(number) {
  const sqrt = Math.sqrt(number);

  if (number === 0 || typeof number != "number") {
    return "Número inválido.";
  } else if (sqrt === Math.floor(sqrt)) {
    return `A raiz quadrada de ${number} é: ${sqrt}.`;
  } else {
    return `Não existe raiz exata para o número ${number}.`;
  }
}

/*  03 - Array de notas musicais */
function musicalNotes(notes) {
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

  for (let index = 0; index < notes.length; index += 1) {
    let thisNote = notes[index];
    let thisDegree = firstAllDegrees[thisNote];

    firstMusicDegrees.push(thisDegree);
  }

  return firstMusicDegrees;
}

/*  04 - Array de notas musicais - 2 */
function musicalNotes2(notes) {
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

  for (let index = 0; index < notes.length; index += 1) {
    let thisNote = notes[index];
    let thisDetails = allNotesDetails[thisNote];

    secondMusicNotesDetails.push(thisDetails);
  }

  return secondMusicNotesDetails;
}

/*  05 - Varinhas mágicas */
function magicWand(wizard, wand) {
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

/*  06 - Analise de preços da lista de compras */
function productAnalysis(products) {
  let maxPrice = products[0].price;
  let maxProduct = "";

  let total = 0;

  for (let index = 0; index < products.length; index += 1) {
    total += products[index].price;
    if (products[index].price > maxPrice) {
      maxPrice = products[index].price;
      maxProduct = products[index].name;
    }
  }

  let averagePrice = (total / products.length).toFixed(2);

  return `O produto mais caro é ${maxProduct} e custa: R$ ${maxPrice}, a média de preços dos produtos é de: R$${averagePrice}.`;
}

/*  07 - Calcule a média dos graus Celsius e Fahrenheit */
function averageTemperature(anualRegister) {
  let total = 0;
  for (let index = 0; index < anualRegister.length; index += 1) {
    total += anualRegister[index];
  }
  let average = total / anualRegister.length;

  const averageConverted = ((5 * (average - 32)) / 9).toFixed(2);

  return (
    "A média anual de temperatura em graus Celsius é " + averageConverted + "."
  );
}

/*  08 - O número de empates na Copa das galáxias */
function numberTies(matches, scores) {
  const sumPoints = Object.values(scores).reduce((sum, number) => sum + number);
  const winPoints = 3;
  return Math.abs(winPoints * matches - sumPoints);
}

/*  09 - Programas de TV */
function viewerTvShows(dataViewer) {
  let { age, country, likeSports } = dataViewer;

  let message = {
    ufc: "UFC.",
    simpsons: "The Simpsons.",
    madagascar: "The Penguins of Madagascar.",
    fishing: "Sport Fishing.",
    notFound: "Não foi possível dizer o que ela deve assistir.",
  };

  let checkCountry = {
    brasil: country.toUpperCase() === "BRASIL",
    chile: country.toUpperCase() === "CHILE",
  };

  if (age >= 16 && checkCountry.brasil) {
    if (likeSports) return message.ufc;
    return message.simpsons;
  }

  if (age < 16) {
    if (checkCountry.chile && !likeSports) return message.madagascar;
    if (!checkCountry.chile && likeSports) return message.fishing;
  }

  return message.notFound;
}

/*  10 - Nega Números */
function negateNumbers(numbers) {
  let newArr = [];
  for (let index = 0; index < numbers.length; index++) {
    newArr.push(numbers[index] * -1);
  }
  return newArr;
}
module.exports = {
  cnhProcess,
  squareRoot,
  musicalNotes,
  musicalNotes2,
  magicWand,
  productAnalysis,
  averageTemperature,
  numberTies,
  viewerTvShows,
  negateNumbers,
};
