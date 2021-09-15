/* 01 - Encontre o maior número de uma array. */
function getMaxNumber(arrNumbersInt) {
  let maxNumber = arrNumbersInt[0];

  for (let index = 0; index < arrNumbersInt.length; index += 1) {
    if (arrNumbersInt[index] > maxNumber) {
      maxNumber = arrNumbersInt[index];
    }
  }
  return maxNumber;
}

/* 02 - Encontre o menor número de uma array. */
function getMinNumber(arrNumbersInt) {
  let minNumber = arrNumbersInt[0];

  for (let index = 0; index < arrNumbersInt.length; index += 1) {
    if (arrNumbersInt[index] < minNumber) {
      minNumber = arrNumbersInt[index];
    }
  }
  return minNumber;
}

/* 03 - Encontre uma pessoa convidada em uma lista de nomes. */
function findName(arrListNames, name) {
  let foundName = false;
  let msg = "";

  for (let index = 0; index < arrListNames.length; index += 1) {
    if (arrListNames[index].toUpperCase() == name.toUpperCase()) {
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
function checkDataTypeValuesArr(arrDataTypes) {
  const typeOfFirst = typeof arrDataTypes[0];
  for (let elements of arrDataTypes) {
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
