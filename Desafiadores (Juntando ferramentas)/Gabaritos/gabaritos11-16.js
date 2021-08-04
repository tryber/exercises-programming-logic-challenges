// 11 - Array de notas musicais - 3 
// Uma música normalmente é uma sequência de notas.
// Dada a escala maior natural de Dó, cada uma das 7 notas possui um grau, representado por um algorismo romano.
// Dó Ré  Mi  Fá Sol Lá Si
// I  II  III IV  V  VI VII
// Além disso, cada nota forma um acorde chamado tríade. A tríade é composta por uma sequência a partir dela com a "primeira" nota, a "terça" e a "quinta".
// Exemplos
// Tríade de Dó: Dó (a primeira), Mi (a terça), Sol (a quinta).
// Tríade de Ré: Ré (a primeira), Fá (a terça), Lá (a quinta).
// Escreva um código que recebe um array de notas, e retorna array de objetos, com os graus das notas na escala de dó e as notas que formam sua tríade no seguinte formato:
// Entrada: ['Ré', 'Sol', 'Dó'] 
// Saída:
// [
//   {
//     degree: 'II',
//     triad: ['Ré', 'Fá', 'Lá']
//   },
//   {
//     degree: 'V',
//     triad: [ 'Sol', 'Si', 'Ré' ]
//   },
//   {
//     degree: 'I',
//     triad: ['Dó', 'Mi', 'Sol']
//   },
// ]


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
// A partir de um valor N, calcule e retorne o fatorial de N.
// Fatorial de N = N * fatorial(N-1).
// Definição: Fatorial de 0 = 1
// fat(3) = 3 * fat(2) // 6
// fat(2) = 2 * fat(1) // 2
// fat(1) = 1 * fat(0) // 1
// fat(0) = 1

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


// 13 - Fibonnaci
// A sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como sequência de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores.
// Escreva um algoritmo que a partir de um número inteiro N mostre os N primeiros números dessa série.
// Definição:
//   fib(0) = 0
//   fib(1) = 1
//   fib(n) = fib(n-1) + fib(n-2)
// Valor     : Saída esperada
// n = 5     : 0 1 1 2 3

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
// Faça um algoritmo que some números primos de 0 à 150.

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
// Faça uma função que calcule o fatorial de um número e em seguida, faça a média dos fatoriais de 0 a 5.

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
// Desenvolva uma função `cpfValidator`, que recebe uma string no formato de CPF `xxx.xxx.xxx-xx` e verifica se o CPF passado por parâmetro é válido ou não.
// Considere um CPF com os seguintes dígitos:
// `abc.def.ghi-jk`
// Para descobrirmos o primeiro dígito verificado `j`, procedemos da seguinte maneira: multiplicamos o primeiro por 1, o segundo por 2, o terceiro por 3, o quarto por 4 e vamos assim até multiplicarmos o nono por 9. Então, somamos tudo isto. O dígito `j` é o resto da divisão da soma por 11 (ou 0, caso o resto seja 10).
// Para o segundo dígito verificador `k`, temos o seguinte: multiplicamos o segundo digito por 1, o terceiro por 2, o quarto por 3 e vamos assim até multiplicarmos o décimo (primeiro dígito verificador) por 9. Então, somamos tudo isto. O dígito `k` será o resto da divisão da soma por 11 (ou 0, caso o resto seja 10).
// Sabendo que isso vale para 100% dos CPFs, sua missão é implementar uma função que, dado um CPF, diga se ele é válido ou não.
// A saída da sua função deve ser uma string. Quando o CPF for válido, o retorno deve ser `'CPF válido'`; quando o CPF for inválido, o retorno deve ser `'CPF inválido'`
// **Importante:**
// Uma sequência de números iguais, como por exemplo `'000.000.000-00'`, também é um CPF inválido 😉
// Exemplo:
// ```
// // Entrada:
// '397-606-448-34'
// // Saída:
// 'CPF inválido'
// // Entrada:
// '166.354.840-43'
// // Saída:
// 'CPF válido'
// ```
// **O que será verificado:**
// - A função deve retornar a mensagem `'CPF inválido'`, quando o CPF for inválido
// - A função deve retornar a mensagem `'CPF válido'`, quando o CPF for válido.

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
