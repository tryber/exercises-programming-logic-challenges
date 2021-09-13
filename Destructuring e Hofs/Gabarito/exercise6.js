import bands from './bands.js';

// 6 - Filtre todas os álbuns que possuem nota igual a 100

const bandAlbum = bands
.map((band) => band.bestAlbuns)
.reduce((a, b) => [...a, ...b])
.filter((item) => item.rate === 100);

console.log(bandAlbum);

