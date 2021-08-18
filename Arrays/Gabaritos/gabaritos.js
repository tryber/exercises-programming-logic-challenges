// 01- Maior número :
const maxNumbers = [3, 1, 8, 34, 13, 2, 5];

let maxNumber = maxNumbers[0];

for (let index = 0; index < maxNumbers.length; index += 1) {
  if (maxNumbers[index] > maxNumber) {
    maxNumber = maxNumbers[index];
  }
}


//02 - Menor número
const minNumbers = [3, 1, 8, 34, 13, -5, 2, 5];

let minNumber = minNumbers[0];

for (let index = 0; index < minNumbers.length; index += 1) {
  if (minNumbers[index] < minNumber) {
    minNumber = minNumbers[index];
  }
}

// 03 - Descubra se o nome esta em um array
let facilitators = ['Silvia', 'Isa', 'Marina', 'Mica', 'Amanda', 'Karine'];
let foundMica = false;
for(let index = 0; index < facilitators.length; index += 1) {
  if(facilitators[index] == 'Mica'){
    foundMica = true;
  }
}

if(foundMica == true){
  console.log('O nome da Mica está no array.')
}
else {
  console.log('Não faz parte.')
}


// 04 - Todos do mesmo tipo?
function verifyAllElements(array) {
  const typeOfFirst = typeof array[0];
  for (let elements of array) {
    if (typeOfFirst !== typeof elements) {
      return false;
    }
  }
  return true;
}


// 05 - Idade do filho mais velho
function oldestSon(pedroAge, kidsAges) {
  let sumkidsAges = 0;

  kidsAges.forEach((kid) => {
    sumkidsAges += kid;
  });

  let olderKidAge = (pedroAge - sumkidsAges);
  kidsAges.push(olderKidAge);

  let olderKid = Math.max(...kidsAges);

  return `O filho mais velho tem ${olderKid} anos`;
}
