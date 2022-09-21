const data = require('../data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = () => {
  const [banda1, banda2] = data.bands;
  const bandsInformation = [banda1, banda2];

  return bandsInformation;
}

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "Os Melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
  const { bandName, bestAlbuns } = data.bands[0];
  const albuns = bestAlbuns.reduce((acc, { name }) => {
    acc.push(name);
    return acc;
  }, []);

  return `Os melhores álbuns do ${bandName}: ${albuns}` 
}

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => {
  const allBandsName = data.bands.map((band) => band.bandName);

  return allBandsName;
}

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
  const usaBands = data.bands.filter((band) => band.country = 'United States')
    .map(({ bandName }) => bandName);

  return usaBands;
}

// 5 - Filtre e retorne um array com os nomes das bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
  const bandsGenre = data.bands.filter((band) => band.genre.includes('Rock')).map(band => band.bandName)
  return bandsGenre;
}

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
  bandAlbum = data.bands.map((band) => band.bestAlbuns)
    .reduce((a, b) => [...a, ...b])
    .filter((item) => item.rate === 100);

  return bandAlbum;
}
