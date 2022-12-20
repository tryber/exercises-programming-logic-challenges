/*

14 - Tempo de viagem

Escreva um algoritmo que recebe a duração total de uma viagem em minutos e retorne a duração em horas e minutos no seguinte formato:

--------------------------------------------------
"A viagem terá duração de x hora(s) e y minuto(s)"
--------------------------------------------------

*/

function timeTravel(totalMinutes){
  const hours = parseInt(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;
  return (
    `A viagem terá duração de ${hours} hora(s) e ${remainingMinutes} minuto(s)`
  );
}

module.exports = timeTravel;
