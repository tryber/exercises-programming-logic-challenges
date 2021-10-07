/*  01 - Inverte nomes */
function reverseNames(fullName) {
  let invertName = fullName.split(" ");
  return invertName[1] + " " + invertName[0];
}

/*  02 - Converte para numero */
function converteType(string) {
  let toNumber = Number(string);
  return toNumber;
}

/*  03 - Apresentação pessoal */
function personalPresentation(firstName, lastName, age) {
  return (
    "Meu nome é " +
    firstName +
    " " +
    lastName +
    " e tenho " +
    age +
    " anos de vida."
  );
}

/* 04 - Quatro operações matemáticas */
function mathOperations(number1, number2) {
  let sum = number1 + " + " + number2 + " = " + (number1 + number2) + ". ";
  let sub = number1 + " - " + number2 + " = " + (number1 - number2) + ". ";
  let mul = number1 + " x " + number2 + " = " + number1 * number2 + ". ";
  let div = number1 + " / " + number2 + " = " + number1 / number2 + ".";
  return sum + sub + mul + div;
}

/*  05 - Primeira e última letra */
function firstLastLetter(word) {
  let firstLetter = word.substr(0, 1);
  let lastLetter = word.substr(-1);

  return (
    "A primeira letra é: " +
    firstLetter +
    " e a última letra é: " +
    lastLetter +
    "."
  );
}

/*  06 - Nome do cachorro */
function dogName(snack, sweet) {
  let firstLetters = snack.slice(0, 3);
  let lastLetters = sweet.slice(-3);

  let dogName = firstLetters + lastLetters;

  return "O cachorrinho de Joana vai se chamar: " + dogName;
}

/*  07 - Contem "a" ? */
function includeA(word) {
  let newWord = word.toLowerCase();
  let wordsBegin = newWord.startsWith("a");
  let wordsEnd = newWord.endsWith("a");
  let contain = newWord.substr(1, newWord.length - 2).includes("a");

  if (wordsBegin && !wordsEnd && !contain) {
    return "A palavra " + word + " possui a letra 'a' apenas no início.";
  }
  if (!wordsBegin && wordsEnd && !contain) {
    return "A palavra " + word + " possui a letra 'a' apenas no fim.";
  }

  if (wordsBegin && wordsEnd && !contain) {
    return (
      "A palavra " +
      word +
      " possui a letra 'a', porém ela não está nem no início nem no fim."
    );
  }

  if (!wordsBegin && !wordsEnd && contain) {
    return (
      "A palavra " +
      word +
      " possui a letra 'a', porém ela não é a primeira nem a última letra."
    );
  }
  return "A palavra " + word + " não contém a letra 'a'.";
}

/*  08 - Descubra quantas letras tem */
function countLetters(string, letter) {
  let newString = string;
  newString = newString.replace(/[àáäâã]/g, "a");
  newString = newString.replace(/[èéëê]/g, "e");
  newString = newString.replace(/[ìíïî]/g, "i");
  newString = newString.replace(/[òóöô]/g, "o");
  newString = newString.replace(/[ùúüû]/g, "u");
  newString = newString.toLowerCase();

  let totalWords = 0;
  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === letter) {
      totalWords += 1;
    }
  }
  return totalWords;
}

/*  09 - Brincando de espionagem */
function encodeMessage(string) {
  let newWord = "";
  for (let index = 0; index < string.length; index += 1) {
    let word = string[index];
    switch (word) {
      case "a":
        newWord += word.replace("a", "5");
        break;
      case "e":
        newWord += word.replace("e", "b");
        break;
      case "i":
        newWord += word.replace("i", "9");
        break;
      case "o":
        newWord += word.replace("o", "p");
        break;
      case "u":
        newWord += word.replace("u", "1");
        break;
      default:
        newWord += word;
        break;
    }
  }
  return newWord;
}

module.exports = {
  reverseNames,
  converteType,
  personalPresentation,
  mathOperations,
  firstLastLetter,
  dogName,
  includeA,
  countLetters,
  encodeMessage,
};
