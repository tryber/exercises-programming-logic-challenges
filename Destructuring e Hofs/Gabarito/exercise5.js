import bands from './bands.js';

// 5 - Filtre e exiba apenas as bandas que contenham 'Rock' no gênero musical

const bandsGenre = bands.filter((band) => band.genre.includes('Rock'));

console.log(bandsGenre);