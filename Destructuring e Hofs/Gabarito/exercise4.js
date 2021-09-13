import bands from './bands.js';

// 4 - Filtre e exiba apenas o nome das bandas que são dos Estados Unidos

const usaBands = bands
  .filter((band) => band.country = 'United States')
  .map(({ bandName }) => bandName);

console.log(usaBands);