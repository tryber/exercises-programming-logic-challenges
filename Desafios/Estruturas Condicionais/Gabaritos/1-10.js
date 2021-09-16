/*  01 - Lanchonete da Trybe */
function optionsMenu(number) {
  switch (number) {
    case 1:
      return "1 - Trybe Lanche Feliz";
    case 2:
      return "2 - McTrybe";
    case 3:
      return "3 - TrybeWooper";
    case 4:
      return "4 - X-Trybe";
    case 5:
      return "5 - Triplo Trybe com JS";
    default:
      return "Não temos esta opção ainda :(";
  }
}

/*  02 - Switch Case */
function studentSituation(studentNote) {
  if (studentNote <= 10) {
    return "PÉSSIMO";
  } else if (studentNote >= 11 && studentNote <= 30) {
    return "RUIM";
  } else if (studentNote >= 31 && studentNote <= 50) {
    return "REGULAR";
  } else if (studentNote >= 51 && studentNote <= 70) {
    return "MEDIANO";
  } else if (studentNote >= 71 && studentNote <= 90) {
    return "ÓTIMO";
  } else {
    return "EXCELENTE";
  }
}

/*  03 - Mostre a classe do aventureiro */
function foundAdventurous(adventurous) {
  switch (adventurous) {
    case "Tunico":
      return "Mestre dos Magos";

    case "Cremoso":
      return "Cavaleiro Negro";

    case "Gordinho":
      return "Pirata";

    case "Lobo Solitário":
      return "Samurai";

    case "Ousado":
      return "Mago";

    case "Anjo Loiro":
      return "Clérigo";

    default:
      return "Não foi possível encontrar um aventureiro e nome.";
  }
}

/*  04 - Dinossauro poliglota */
function dinosaur(command) {
  switch (command) {
    case "esquerda":
      return "english";
    case "direita":
      return "français";
    case "nenhuma":
      return "português";
    case "as duas":
      return "Ai eu caiu, né!!";
    default:
      return "Comando desconhecido.";
  }
}

/*  05 - Robô amigo */
function robotFriend(mon, dad, me, brother, sister) {
  if (mon || dad || me || (brother && sister)) {
    return "Things I do for love...";
  }
  return "Not today.";
}

/* 06 - Taxa Metabólica Basal */
function basalMetabolicRate(personAge, personSex, personWeight, personHeight) {
  let bmr;

  if (personSex === "M") {
    bmr = personHeight * 6.25 + personWeight * 9.99 - personAge * 4.92 + 5;
  }

  if (personSex === "F") {
    bmr = personHeight * 6.25 + personWeight * 9.99 - personAge * 4.92 - 161;
  }

  return `A taxa metabólica basal é: ${bmr} Kcal.`;
}

/* 07 - Maior ou menor de idade */
function legalAge(age) {
  let response = "";
  if (age >= 18) {
    response = "A pessoa é maior de idade.";
  } else {
    response = "A pessoa é menor de idade.";
  }
  return response;

  /* Exemplo com ternário
  return age >=18 ? "A pessoa é maior de idade." :"A pessoa é menor de idade.";
  */
}

/* 08 - Descubra a idade mínima */
function foundYoungerPerson(marinaAge, silviaAge, izaAge) {
  if (marinaAge < silviaAge && marinaAge < izaAge) {
    return `Marina é a mais jovem e possui ${marinaAge} anos de idade.`;
  } else if (silviaAge < marinaAge && silviaAge < izaAge) {
    return `Silvia é a mais jovem e possui ${silviaAge} anos de idade.`;
  } else {
    return `Iza é a mais jovem e possui ${izaAge} anos de idade.`;
  }
}

/* 09 - Aprovação nos projetos */
function reviewProjectApproval(dataForAnalysis) {
  let { rec, reqs, totalReqs, completed } = dataForAnalysis;

  let approved = {
    notRec: 0.8,
    rec: 0.9,
  };

  let mensagem = {
    approved: "Parabéns, você está aprovado(a)!",
    notApproved: "Você ainda precisa entregar mais requisitos ;)",
  };

  if (rec) {
    let isOk = completed / totalReqs >= approved.rec;
    if (isOk) return mensagem.approved;
    return mensagem.notApproved;
  } else {
    let isOk = completed / reqs >= approved.notRec;
    if (isOk) return mensagem.approved;
    return mensagem.notApproved;
  }
}

/* 10 - Entrega do drone */
/* function droneDelivery(heightBox, widthBox, depthBox, heightWindow, widthWindow, depthWindow) {
  if ((heightBox < heightWindow && widthBox < widthWindow) || depthBox < depthWindow) {
    return `É possível realizar a entrega.`;
  } else {
    return `Não é possível realizar a entrega.`;
  }
}
 */
module.exports = {
  optionsMenu,
  studentSituation,
  foundAdventurous,
  dinosaur,
  robotFriend,
  basalMetabolicRate,
  legalAge,
  foundYoungerPerson,
  reviewProjectApproval,
  /* droneDelivery, */
}