/* 01 - Encontre o maior número de uma array. */
function getMaxNumber(arr) {
  let maxNumber = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > maxNumber) {
      maxNumber = arr[index];
    }
  }
  return maxNumber;
}

/* 02 - Encontre o menor número de uma array. */
function getMinNumber(arr) {
  let minNumber = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < minNumber) {
      minNumber = arr[index];
    }
  }
  return minNumber;
}

/* 03 - Encontre uma pessoa convidada em uma lista de nomes. */
function findName(arr, name) {
  let foundName = false;
  let msg = "";

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].toUpperCase() == name.toUpperCase()) {
      foundName = true;
    }
  }

  if (foundName == true) {
    msg = "O nome está na lista.";
  } else {
    msg = "O nome não está na lista.";
  }
  return msg;
}

/* 04 - Verifique se todos os dados de uma lista são do mesmo tipo. */
function checkDataTypeValuesArr(arr) {
  const typeOfFirst = typeof arr[0];
  for (let elements of arr) {
    if (typeOfFirst !== typeof elements) {
      return false;
    }
  }
  return true;
}

/* 05 - Escreva uma algoritmo para encontrar a idade do filho mais velho considerando as informações abaixo. */
function findMaxAgeSon(pedroAge, kidsAges) {
  let sumKidsAges = 0;

  kidsAges.forEach((kid) => {
    sumKidsAges += kid;
  });

  let olderKidAge = pedroAge - sumKidsAges;
  kidsAges.push(olderKidAge);

  let olderKid = getMaxNumber(kidsAges);

  return `O filho mais velho tem ${olderKid} anos`;
}

module.exports = {
  getMaxNumber,
  getMinNumber,
  findName,
  checkDataTypeValuesArr,
  findMaxAgeSon,
};
