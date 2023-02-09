/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

const getMaxNumber = (numbers) => {
    return numbers.reduce((bigger, number) => bigger > number ? bigger : number);
}

module.exports = getMaxNumber;
