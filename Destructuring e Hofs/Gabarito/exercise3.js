import bands from './bands.js';

// 3 - Crie um array utilizando HOF's que contenha apenas o nome das bandas

const allBandsName = bands.map((band) => band.bandName);

console.log(allBandsName);