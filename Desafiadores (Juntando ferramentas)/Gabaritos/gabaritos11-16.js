// 11 - Array de notas musicais - 3 
let musicNotes = ['Ré', 'Sol', 'Dó'];

let allDegrees = {
  Dó: "I",
  Ré: "II",
  Mi: "III",
  Fá: "IV",
  Sol: "V",
  Lá: "VI",
  Si: "VII",
}

let allDegreesKeys = Object.keys(allDegrees);
let musicNotesDetails = [];

for(let index = 0; index < musicNotes.length; index += 1){
  let thisNote = musicNotes[index];
  let thisDegree = allDegrees[thisNote];

  let noteIndex = allDegreesKeys.findIndex(key => key === thisNote);

  let thirdIndex = noteIndex + 2;
  let fifthIndex = noteIndex + 4;

  let third = allDegreesKeys[thirdIndex] || allDegreesKeys[thirdIndex - 7];
  let fifth = allDegreesKeys[fifthIndex] || allDegreesKeys[fifthIndex - 7];

  musicNotesDetails.push({
    degree: thisDegree,
    triad: [thisNote, third, fifth]
  })
}

console.log(musicNotesDetails)


// 12 - Fatorial
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


// 13 - Fibonacci
function fibonnaci(n) {
  const fib = [0, 1];
  for (let count = 2; count <= n; count += 1) {
    let n1 = fib[count - 1];
    let n2 = fib[count - 2];
    fib.push(n1 + n2);
  }
  return fib[n];
}


// 14 - Soma de números primos
function isPrimo(numero) {
  if(numero <= 1) 
      return false;
  
  for(let index = 2; index < numero; index += 1) {
      if(numero % index === 0)
      return false;
  }

  return true;
}

let soma = 0;
for(let index = 0; index <= 150; index += 1) {
  if(isPrimo(index)) {
      soma += index;
  }
}


// 15 - Fatorial e média
function fatorial(numero) {
  if(numero === 0 || numero === 1) {
      return 1;
  }

  let fat = 1;
  for(let index = 2; index <= numero; index += 1) {
      fat *= index;
  }

  return fat;
}

let som = 0;
for(let index = 0; index <= 5; index += 1) {
  som += fatorial(index);
}


// 16 - Validação de CPF
function calcCpfFirstDigit(cpfArray) {
  const sum = cpfArray.slice(0, 9).reduce((sum, number, index) => sum + number * (index + 1), 0);
  const rest = sum % 11;
  if (rest === 10) {
    return 0;
  }
  return rest;
}
function calcCpfSecondDigit(cpfArray) {
  const sum = cpfArray.slice(0, 10).reduce((sum, number, index) => sum + number * index, 0);
  const rest = sum % 11;
  if (rest === 10) {
    return 0;
  }
  return rest;
}
function cpfValidator(cpf) {
  const cpfArray = cpf.replace(/[^0-9]/g, '')
    .split('')
    .map((strDigit) => parseInt(strDigit));

  if (!cpfArray.find((number) => number !== cpfArray[0])) {
    return 'CPF inválido';
  }
  if (calcCpfFirstDigit(cpfArray) === cpfArray[9] &&
    calcCpfSecondDigit(cpfArray) === cpfArray[10]) {
    return 'CPF válido';
  }

  return 'CPF inválido';
}
