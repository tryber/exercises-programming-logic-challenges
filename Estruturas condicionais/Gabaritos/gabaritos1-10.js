// 01 - Lanchonete da Trybe
let option = 3;

switch (option) {
  case 1:
    console.log('1 - Trybe Lanche Feliz');
    break;
  case 2:
    console.log('2 - McTrybe');
    break;
  case 3:
    console.log('3 - TrybeWooper');
    break;
  case 4:
    console.log('4 - X-Trybe');
    break;
  case 5:
    console.log('5 - Triplo Trybe com JS');
    break;
  default:
    console.log('Não temos esta opção ainda :(');
};


// 02 - Switch Case
function studentSituation(studentNote) {
  if (studentNote <= 10) {
    return 'PÉSSIMO';
  } else if (studentNote >= 11 && studentNote <= 30) {
    return 'RUIM';
  } else if (studentNote >= 31 && studentNote <= 50) {
    return 'REGULAR';
  } else if (studentNote >= 51 && studentNote <= 70) {
    return 'MEDIANO';
  } else if (studentNote >= 71 && studentNote <= 90) {
    return 'ÓTIMO';
  } else {
    return 'EXCELENTE';
  }
}


// 03 - Mostre a classe do aventureiro
let adventurous = 'Gordinho';

switch (adventurous) {
  case 'Tunico':
    console.log('Mestre dos Magos');
    break;
  case 'Cremoso':
    console.log('Cavaleiro Negro');
    break;
  case 'Gordinho':
    console.log('Pirata');
    break;
  case 'Lobo Solitário':
    console.log('Samurai');
    break;
  case 'Ousado':
    console.log('Mago');
    break;
  case 'Anjo Loiro':
    console.log('Clérigo');
    break;
  default:
    console.log('Não foi possível encontrar um aventureiro com esse nome.');
};


// 04 - Dinossauro poliglota
function dinosaur(command) {
  let dinosaurResult;
  switch (command) {
    case "esquerda":
      dinosaurResult = "english";
      break;
    case "direita":
      dinosaurResult = "français";
      break;
    case "nenhuma":
      dinosaurResult = "português";
      break;
    case "as duas":
      dinosaurResult = "Ai eu caiu, né!!";
      break;
  }
  return dinosaurResult;
}


// 05 - Robô amigo
let mom = true;
let dad = false;
let me = false;
let brother = true;
let sister = false;

if(mom || dad || me){
  console.log('Things I do for love...')
} else if (brother && sister) {
  console.log('Things I do for love...')
} else {
  console.log('Not today.')
}


// 06 - Taxa Metabólica Basal
let personAge = 20;
let personSex = 'F';
let personWeight = 80;
let personHeight = 180;

let bmr;

if(personSex === 'M'){
  bmr = personHeight * 6.25 + personWeight * 9.99 - personAge * 4.92 + 5;
}

if(personSex === 'F'){
  bmr = personHeight * 6.25 + personWeight * 9.99 - personAge * 4.92 - 161;
}

console.log(`A taxa metabólica basal é: ${bmr} Kcal.`)


// 07 - Maior ou menor de idade
let driverAge = 20;
let driverCategory;

//Com if/else
if (driverAge >= 18) {
  driverCategory = 'maior de idade';
} else {
  driverCategory = 'menor de idade';
};

console.log('A pessoa é ' + driverCategory);

//Com operador ternário
let driverAgeT = 20;
let categoryT = driverAgeT >= 18 ? 'maior de idade' : 'menor de idade';

console.log('A pessoa é ' + categoryT);


// 08 - Descubra a idade mínima
let ageMarina = 18;
let ageSilvia = 16;
let ageIza = 19;

if(ageMarina < ageSilvia && ageMarina < ageIza){
  console.log('Marina é a mais nova')
}
else if (ageSilvia < ageMarina && ageSilvia < ageIza){
  console.log('Silvia é a mais nova')
} 
else {
  console.log('Iza é a mais nova')
} 


// 09 - Aprovação nos projetos
let totalRequirements = 80;
let recoveryPeriod = false;

if (totalRequirements >= 80 && recoveryPeriod === false) {
  console.log('Parabéns, você está aprovado(a)!');
} else if (totalRequirements >= 90) {
  console.log('Parabéns, você está aprovado(a)!');
} else {
  console.log('Você ainda precisa entregar mais requisitos ;)');
}


// 10 - Entrega do drone
function entregaPorDrone(alturaC, laguraC, profundidadeC, alturaJ, larguraJ) {
  if (alturaC < alturaJ && laguraC < larguraJ || profundidadeC < larguraJ) {
    return `É possível realizar a entrega`
  } else {
    return `Não é possível realizar a entrega`
  }
};
