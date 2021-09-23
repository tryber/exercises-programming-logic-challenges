/* 01 - Encontre o maior número de uma array. */
function getMaxNumber(numbers) {
  let maxNumber = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  return maxNumber;
}

/* 02 - Encontre o menor número de uma array. */
function getMinNumber(numbers) {
  let minNumber = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < minNumber) {
      minNumber = numbers[index];
    }
  }
  return minNumber;
}

/* 03 - Encontre uma pessoa convidada em uma lista de nomes. */
function findQuest(names, guest) {
  let findGuest = false;
  let message = "";

  for (let index = 0; index < names.length; index += 1) {
    if (names[index].toUpperCase() == guest.toUpperCase()) {
      findGuest = true;
    }
  }

  if (findGuest == true) {
    message = "O nome está na lista.";
  } else {
    message = "O nome não está na lista.";
  }
  return message;
}

/* 04 - Verifique se todos os dados de uma lista são do mesmo tipo. */
function dataType(types) {
  const typeOfFirst = typeof types[0];
  for (let elements of types) {
    if (typeOfFirst !== typeof elements) {
      return false;
    }
  }
  return true;
}

/* 05 - Encontre o filho mais velho. */
function findOldestSon(pedroAge, kidsAge) {
  let sumKidsAge = 0;

  kidsAge.forEach((kid) => {
    sumKidsAge += kid;
  });

  let olderKidAge = pedroAge - sumKidsAge;
  kidsAge.push(olderKidAge);

  let olderKid = getMaxNumber(kidsAge);

  return `O filho mais velho tem ${olderKid} anos.`;
}

module.exports = {
  getMaxNumber,
  getMinNumber,
  findQuest,
  dataType,
  findOldestSon,
};
