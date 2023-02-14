/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

const getMinNumber = (numbers) => {
 return numbers.reduce((acc, curr) => acc < curr ? acc : curr)  
}
module.exports = getMinNumber;
