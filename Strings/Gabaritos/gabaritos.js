// 01 - Inverte Nome
function changeNamePosition(fullName) {
  const invertName = fullName.split(" ");

  return invertName[1] + ' ' + invertName[0];
}


// 02 - Converte Para numeros
function convertToNumber(string) {
  const toNumber = Number(string);
  return toNumber;
}


// 03 - Nome e idade
let personName = 'Ronaldo';
let lastName = 'Lima';
let age = 36;

console.log('Meu nome é ' + personName + ' ' + lastName + ' e tenho ' + age + ' anos de vida.');


// 04 - Quatro operações matemáticas
let num1 = 10;
let num2 = 4;

console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2)); 
console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2)); 
console.log(num1 + ' x ' + num2 + ' = ' + (num1 * num2)); 
console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2)); 



// 05 - Primeira e última letra
let word = 'caneta';

// let firstLetter = word[0]
// let lastLetter = word[word.length -1]

// let firstLetter = word.slice(0, 1)
// let lastLetter = word.slice(-1)

let firstLetter = word.substr(0, 1)
let lastLetter = word.substr(-1)

console.log('A primeira letra é: ' + firstLetter + ' e a ultima letra é: ' + lastLetter)


// 06 - Nome do cachorro
let snack = "coxinha";
let sweet = "chocolate";

let firstLetters = snack.slice(0, 3);
let lastLetters = sweet.slice(-3);

let dogName = firstLetters + lastLetters

console.log('O cachorrinho de Joana vai se chamar: ' + dogName)


// 07 - Começa com "a" ?
function haveA(word) {
  let wordsBegin = word.startsWith('a');
  let wordsEnd = word.endsWith('a');
  let contain = word.includes('a');
  let returnFrase = '';
  if (wordsBegin) returnFrase += 'a palavra começa com "a" e ';
  
  if (wordsEnd) returnFrase += 'a palavra termina com "a" e ';

  if (contain) {
    returnFrase += 'a palavra contem "a".'
  } else {
    returnFrase += 'a palavra não tem "a".'
  };

  return returnFrase.replace('a', 'A')
}


// 08 - Descubra quantas letras tem
function findHowManyWords(string, word) {
  let totalWords = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === word) {
      totalWords += 1;
    }
  }
  return totalWords;
}


// 09 - Brincando de espionagem
function codeMessage(string) {
  let newWord = '';
  for (let index = 0; index < string.length; index += 1) {
    let word = string[index]
      switch (word) {
        case "a": 
          newWord += word.replace('a', '5')    
          break;
        case "e":
          newWord += word.replace('e', 'b')
          break;
        case "i":
          newWord += word.replace('i', '9')
          break;
        case "o":
          newWord += word.replace('o', 'p')
          break;
        case "u":
          newWord += word.replace('u', '1')
          break;      
        default:
          newWord += word
          break;
      }
    }
    return newWord    
}