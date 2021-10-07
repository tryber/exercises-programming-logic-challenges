const bands = require('../bands');


/*  1 - Exiba as informações da primeira e da segunda banda utilizando destructuring */

function showFirstTwo(){
  const [banda1, banda2] = bands;
  return JSON.stringify([{...banda1},{...banda2}]);
}

 console.log(showFirstTwo());


