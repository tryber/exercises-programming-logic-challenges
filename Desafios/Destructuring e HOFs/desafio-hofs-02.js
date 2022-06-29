const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = (bands) => {
    const [ primeiraBanda ] = bands;
    const { bandName, bestAlbuns } = primeiraBanda;

    const albumNames = bestAlbuns.map((bestAlbum) => {
        return bestAlbum.name;
    });

    const stringAlbumNames = albumNames.join(',')

    return `os melhores álbuns do ${bandName}: ${stringAlbumNames}`;
}

// const getBestAlbuns = ([ primeiraBanda ]) => {
//     const { bandName, bestAlbuns } = primeiraBanda;

//     const albumNames = bestAlbuns.map(({ name }) => name);

//     const stringAlbumNames = albumNames.join(',')

//     return `os melhores álbuns do ${bandName}: ${stringAlbumNames}`;
// }

console.log(getBestAlbuns(data.bands));


module.exports = getBestAlbuns;
