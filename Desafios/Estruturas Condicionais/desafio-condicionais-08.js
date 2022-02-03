/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
  if(marinaAge < silviaAge && marinaAge < izaAge){
    return "Marina é a pessoa mais jovem e possui " + marinaAge + " anos";

  } else if(silviaAge < marinaAge && silviaAge < izaAge){
    return "Silvia é a pessoa mais jovem e possui " + silviaAge + " anos";

  } else if(izaAge < marinaAge && izaAge < silviaAge){
    return "Iza é a pessoa mais jovem e possui " + izaAge + " anos";
  }
}


module.exports = findYoungerPerson;
