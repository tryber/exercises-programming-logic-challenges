/*

06 - Taxa Metabólica Basal

Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.

Escreva um algoritmo que recebe os dados a seguir:
* age: número maior que 0
* sex: M ou F
* weight: Em (kg) com número maior que 0
* height: Em (cm) com número maior que 0

Fórmula para homens:
* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

Fórmula para mulheres:
* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

O retorno deve ser no seguinte formato:
---------------------------------------
"A taxa metabólica basal é: x Kcal"
---------------------------------------

*/

function basalMetabolicRate(age, sex, weight, height){

  let taxaBasal;

  if(age < 0){
    console.log("Idade incorreta, tente novamente.");

  } else if(sex == "M"){
    taxaBasal = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;

  } else if(sex == "F"){
    taxaBasal = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;

  }
  
  taxaBasal = taxaBasal.toFixed(2);

  return "A taxa metabólica basal é " + taxaBasal;
}

module.exports = basalMetabolicRate;
