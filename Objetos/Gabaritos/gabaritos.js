// 01 - Jogo de fantasia
let firstRole = 'Guerreiro';

let firstRoles = {
  Mago: 5,
  Arqueiro: 10, 
  Guerreiro: 15,
  Cavaleiro: 20,
}

let firstLifePoints = firstRoles[firstRole];

console.log(`${firstRole}, ${firstLifePoints}PV`);


// 02 - Jogo de fantasia- Parte 2
let secondRole = 'Arqueiro';

let secondRoles = {
  Mago: {
    secondLifePoints: 5,
    secondEquipment: 'Varinha'
  },
  Arqueiro: {
    secondLifePoints: 10,
    secondEquipment: 'Arco Curto'
  },
  Guerreiro: {
    secondLifePoints: 15,
    secondEquipment: 'Espada'
  },
  Cavaleiro: {
    secondLifePoints: 20,
    secondEquipment: 'Armadura Completa'
  },
}

let { secondLifePoints, secondEquipment } = secondRoles[secondRole];

console.log(`${secondRole}: ${secondLifePoints}PV, ${secondEquipment}.`);


// 03 - Escala musical
let note = "Dó";

let degrees = {
  Dó: "I",
  Ré: "II",
  Mi: "III",
  Fá: "IV",
  Sol: "V",
  Lá: "VI",
  Si: "VII",
}

console.log(degrees[note])


// 04 - Quem é a pessoa mais velha?
const peopleArray = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 },
  { name: 'Tamires', age: 22 },
  { name: 'Xablau', age: 42 },
  { name: 'Lucas', age: 37 },
  { name: 'Oswaldo', age: 13 },
  { name: 'Enzo', age: 13 },
  { name: 'Marilia', age: 21 },
  { name: 'Gabriela', age: 25 },
  { name: 'Silvia', age: 43 },
  { name: 'Gabriel', age: 25 },
  { name: 'Ricardo', age: 51 },
  { name: 'Joaquim', age: 9 },
  { name: 'Ronald', age: 18 },
  { name: 'Paulo', age: 27 },
  { name: 'Emilia', age: 45 },
];
function oldestPerson() {
  let olderPerson = { name: null, age: null };

  peopleArray.forEach((person) => {
    if (person.age > olderPerson.age) {
      olderPerson.name = person.name;
      olderPerson.age = person.age;
    }
  });

  return `${olderPerson.name} tem a maior idade, com ${olderPerson.age} anos`;

}

console.log(oldestPerson());


// 05 - Jogo de fantasia- Parte 3
let role = 'Guerreiro';
let level = 1;

let roles = {
  Mago: {
    lifePoints: 5,
    lifePointsPerLevel: 2,
    equipment: 'Varinha'
  },
  Arqueiro: {
    lifePoints: 10,
    lifePointsPerLevel: 3,
    equipment: 'Arco Curto'
  },
  Guerreiro: {
    lifePoints: 15,
    lifePointsPerLevel: 4,
    equipment: 'Espada'
  },
  Cavaleiro: {
    lifePoints: 20,
    lifePointsPerLevel: 5,
    equipment: 'Armadura Completa'
  },
}

let { lifePoints, equipment, lifePointsPerLevel } = roles[role]

let levelsAfterFirst = level - 1;

let additionalLifePoints = levelsAfterFirst * lifePointsPerLevel;
let totalLifePoints = lifePoints +  additionalLifePoints;

console.log(`${role}, nível ${level}: ${totalLifePoints}PV, ${equipment}.`);
