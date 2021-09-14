// 01 - Mensagem codificada 
function decodeString(word) {
  let stringDecoded = "";
  for (let index = 0; index < word.length; index += 1) {
    stringDecoded += index * 3;
  }
  return stringDecoded;
}


// 02 - Contar até 10
for(let contador = 1; contador <= 10; contador = contador + 1){
	console.log("Contator " + contador);
}


// 03 - Calcular a soma de 1 até 1000
let sum = 0;

for(let count = 0; count <= 1000; count = count + 1){
  sum += count;
}


// 04 - Escreva seu nome N vezes
for(let count = 1; count <= 50; count = count + 1){
  console.log('Jackson - ' + count);
}


// 05 - Números divisíveis por 3
let counter = 0;
for(let index = 2; index <= 150; index += 1) {
    if(index % 3 === 0) {
        counter += 1;
    }
}

if(counter === 50) {
    console.log('secret Message!');
}


// 06 - Imprima os números ímpares
for (let index = 1; index <= 50; index += 1){
  if((index % 2) != 0){
    console.log(index)
  }
}


// 07 - Onde está o elemento?
function findIndexOf(array, element) {
  for (let elem of array) {
    if (elem === element) {
      return array.indexOf(element);
    }
  }
  return "Elemento não encontrado no array";
}


// 08 - Ordem decrescente
for(let count = 200; count >= 100; count = count - 1){
  console.log(count);
}


// 09 - Um novo array
let A = [1, 2, 4, 5, 6];
let B = [3, 9, 8, 5, 0, 2];
let newArray = [];

for(let index = 0; index < A.length; index += 1) {
    for(let newIndex = 0; newIndex < B.length; newIndex += 1) {
        if(A[index] === B[newIndex]) {
            newArray.push(A[index]);
        }
    }
}


