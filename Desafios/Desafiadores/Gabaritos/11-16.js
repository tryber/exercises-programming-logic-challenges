/*  11 - Array de notas musicais - 3 */
function musicalNotes3(arrNotes) {
  let allDegrees = {
    Dó: "I",
    Ré: "II",
    Mi: "III",
    Fá: "IV",
    Sol: "V",
    Lá: "VI",
    Si: "VII",
  };

  let allDegreesKeys = Object.keys(allDegrees);
  let arrNotesDetails = [];

  for (let index = 0; index < arrNotes.length; index += 1) {
    let thisNote = arrNotes[index];
    let thisDegree = allDegrees[thisNote];

    let noteIndex = allDegreesKeys.findIndex((key) => key === thisNote);

    let thirdIndex = noteIndex + 2;
    let fifthIndex = noteIndex + 4;

    let third = allDegreesKeys[thirdIndex] || allDegreesKeys[thirdIndex - 7];
    let fifth = allDegreesKeys[fifthIndex] || allDegreesKeys[fifthIndex - 7];

    arrNotesDetails.push({
      degree: thisDegree,
      triad: [thisNote, third, fifth],
    });
  }
  return arrNotesDetails;
}

/*  12 - Fatorial */
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/*  13 - Fibonacci */
function fibonnaci(n) {
  const fib = [0, 1];
  for (let count = 2; count <= n; count += 1) {
    let n1 = fib[count - 1];
    let n2 = fib[count - 2];
    fib.push(n1 + n2);
  }
  return fib[n - 1];
}

function isPrimo(number) {
  if (number <= 1) return false;

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) return false;
  }

  return true;
}

/*  14 - Soma de números primos */
function sumPrimesNumbers() {
  let sum = 0;
  for (let index = 1; index <= 150; index += 1) {
    if (isPrimo(index)) {
      sum = sum + index
    }
  }
  return sum;
}

/*  15 - Fatorial e média */
function factorial15(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let fat = 1;
  for (let index = 2; index <= number; index += 1) {
    fat *= index;
  }

  return fat;
}

function meanFactorialFromAToB(a, b) {
  let sum = 0;
  for (let n = a; n <= b; n += 1) {
    sum += factorial(n);
  }
  return parseFloat((sum / (b - a + 1)).toFixed(2));
}

function calcCpfFirstDigit(cpfArray) {
  const sum = cpfArray
    .slice(0, 9)
    .reduce((sum, number, index) => sum + number * (index + 1), 0);
  const rest = sum % 11;
  if (rest === 10) {
    return 0;
  }
  return rest;
}
function calcCpfSecondDigit(cpfArray) {
  const sum = cpfArray
    .slice(0, 10)
    .reduce((sum, number, index) => sum + number * index, 0);
  const rest = sum % 11;
  if (rest === 10) {
    return 0;
  }
  return rest;
}

/*  16 - Validação de CPF */
function cpfValidator(cpf) {
  const cpfArray = cpf
    .replace(/[^0-9]/g, "")
    .split("")
    .map((strDigit) => parseInt(strDigit));

  if (!cpfArray.find((number) => number !== cpfArray[0])) {
    return "CPF inválido";
  }
  if (
    calcCpfFirstDigit(cpfArray) === cpfArray[9] &&
    calcCpfSecondDigit(cpfArray) === cpfArray[10]
  ) {
    return "CPF válido";
  }

  return "CPF inválido";
}

module.exports = {
  musicalNotes3,
  factorial,
  fibonnaci,
  sumPrimesNumbers,
  factorial15,
  meanFactorialFromAToB,
  cpfValidator,
};
