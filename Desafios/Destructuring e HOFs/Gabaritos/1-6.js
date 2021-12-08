const { bands } = require('../data');
const data = require('./data');

// 1 - Exiba as informações da primeira e da segunda banda utilizando destructuring

const getBandsInformation = () => {
  const [banda1, banda2] = bands;

  console.log(banda1, banda2)
}

// 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda

const getBestAlbuns = () => {
  const { bandName, bestAlbuns } = bands[0];

  console.log(bandName, bestAlbuns);
}

// 3 - Crie um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => {
  const allBandsName = bands.map((band) => band.bandName);

  console.log(allBandsName);
}

// 4 - Filtre e exiba apenas o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
  usaBands = bands.filter((band) => band.country = 'United States')
    .map(({ bandName }) => bandName);

  console.log(usaBands);
}

// 5 - Filtre e exiba apenas as bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
  const bandsGenre = bands.filter((band) => band.genre.includes('Rock'));

  console.log(bandsGenre);
}

// 6 - Filtre todas os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
  bandAlbum = bands.map((band) => band.bestAlbuns)
    .reduce((a, b) => [...a, ...b])
    .filter((item) => item.rate === 100);

  console.log(bandAlbum);
}
