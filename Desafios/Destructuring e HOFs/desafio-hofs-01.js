const data = require('./data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
// console.log(data.bands);

const getBandsInformation = ({ bands }) => {
    const [ primeiraBanda, segundaBanda ] = bands; // estamos armazenando apenas as duas primeiras bandas do array
    return [ primeiraBanda, segundaBanda ]; // criando um novo array contendo apenas as duas bandas
}

// para ver todos os objetos em detalhes, usar o JSON.stringify(objeto)
console.log(getBandsInformation(data));

module.exports = getBandsInformation;
