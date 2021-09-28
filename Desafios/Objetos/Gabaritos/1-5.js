/* 01 - Jogo de fantasia */
function fantasyGame(className) {
  let roles = {
    Mago: "5PV",
    Arqueiro: "10PV",
    Guerreiro: "15PV",
    Cavaleiro: "20PV",
  };
  return `${className}, ${roles[className]}.`;
}

/* 02 - Jogo de fantasia2 */
function fantasyGame2(className) {
  let roles = {
    Mago: {
      points: "5PV",
      equipment: "Varinha",
    },
    Arqueiro: {
      points: "10PV",
      equipment: "Arco Curto",
    },
    Guerreiro: {
      points: "15PV",
      equipment: "Espada",
    },
    Cavaleiro: {
      points: "20PV",
      equipment: "Armadura Completa",
    },
  };

  return `${roles[className].points}, ${roles[className].equipment}.`;
}

/* 03 - Escala musical */
function musicalScale(note) {
  let degrees = {
    Dó: "I",
    Ré: "II",
    Mi: "III",
    Fá: "IV",
    Sol: "V",
    Lá: "VI",
    Si: "VII",
  };
  return degrees[note];
}

/* 04 - Quem é a pessoa mais velha? */
function getOldPerson(arrPeople) {
  let olderPerson = { name: "", age: 0 };

  for (let index = 0; index < arrPeople.length; index++) {
    let currentPerson = arrPeople[index];
    if (currentPerson.age > olderPerson.age) {
      olderPerson.name = currentPerson.name;
      olderPerson.age = currentPerson.age;
    }
  }
  return `${olderPerson.name} tem a maior idade com ${olderPerson.age} anos.`;
}

/* 05 - Jogo de fantasia- Parte 3 */
function fantasyGame3(className, level) {
  let role = className;
  /* let level = 1; */
  let roles = {
    Mago: {
      lifePoints: 5,
      lifePointsPerLevel: 2,
      equipment: "Varinha",
    },
    Arqueiro: {
      lifePoints: 10,
      lifePointsPerLevel: 3,
      equipment: "Arco Curto",
    },
    Guerreiro: {
      lifePoints: 15,
      lifePointsPerLevel: 4,
      equipment: "Espada",
    },
    Cavaleiro: {
      lifePoints: 20,
      lifePointsPerLevel: 5,
      equipment: "Armadura Completa",
    },
  };

  let { lifePoints, equipment, lifePointsPerLevel } = roles[role];
  let levelsAfterFirst = level - 1;
  let additionalLifePoints = levelsAfterFirst * lifePointsPerLevel;
  let totalLifePoints = lifePoints + additionalLifePoints;

  return `${role}, nível ${level}: ${totalLifePoints}PV, ${equipment}.`;
}

console.log(fantasyGame3("Cavaleiro", 2));

module.exports = {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
};
