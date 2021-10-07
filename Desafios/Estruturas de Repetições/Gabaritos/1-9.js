/* 01 - Mensagem codificada  */
function encode(string) {
  let stringDecoded = "";
  for (let index = 0; index < string.length; index += 1) {
    stringDecoded += index * 3;
  }
  return stringDecoded;
}

/* 02 - Contar até o limite */
function accumulator(limit) {
  let accumulator = 1;
  for (let index = 2; index <= limit; index = index + 1) {
    accumulator = accumulator + index;
  }
  return accumulator;
}

/* 03 - Calcular a soma de 1 até 1000 */
function accumulatorThousand() {
  let accumulator = 1;
  for (let index = 2; index <= 1000; index = index + 1) {
    accumulator = accumulator + index;
  }
  return `A soma de 1 até 1000 é ${accumulator}.`;
}

/* 04 - Escreva um nome N vezes */
function repeatName(name, quantity) {
  let concatenator = name;
  for (let index = 2; index <= quantity; index = index + 1) {
    concatenator = `${concatenator}, ${name}`;
  }
  return concatenator + ".";
}

/* 05 - Números divisíveis por 3 */
function numbersDivisibleBy3(start, limit) {
  let counter = 0;
  for (let index = start; index <= limit; index = index + 1) {
    if (index % 3 === 0) {
      counter = counter + 1;
    }
  }
  if (counter >= 50) {
    return "Há 50 ou mais números diviseis por 3.";
  }
  return "Sequência muito pequena.";
}

/* 06 - Retorne os números ímpares */
function oddNumbers() {
  let concatenator = "1";
  for (let index = 3; index <= 50; index = index + 1) {
    if (index % 2 !== 0) {
      concatenator = `${concatenator}, ${index}`;
    }
  }
  return `${concatenator}.`;
}
/* 07 - Onde está o elemento? */
function findIndexOf(array, element) {
  for (let elem of array) {
    if (elem === element) {
      return array.indexOf(element);
    }
  }
  return "Elemento não encontrado no array.";
}

/* 08 - Ordem decrescente */
function sortDec() {
  let concatenator = "200";
  for (let count = 199; count >= 100; count = count - 1) {
    concatenator = `${concatenator}, ${count}`;
  }
  return `${concatenator}.`;
}

/* 09 - Incluído nos arrays */
function includesArrays(a, b) {
  let newArray = [];

  for (let index = 0; index < a.length; index += 1) {
    for (let newIndex = 0; newIndex < b.length; newIndex += 1) {
      if (a[index] === b[newIndex]) {
        newArray.push(a[index]);
      }
    }

  }
  return newArray;
}

module.exports = {
  encode,
  accumulator,
  accumulatorThousand,
  repeatName,
  numbersDivisibleBy3,
  oddNumbers,
  findIndexOf,
  sortDec,
  includesArrays,
};
