/*

02 - Switch Case

Refatore a função abaixo para utilizar if/else.

NOTAS
abaixo de 10: PÉSSIMO
entre 11 e 30: RUIM
entre 31 e 50: REGULAR
entre 51 e 70: MEDIANO
entre 71 e 90: ÓTIMO
acima de 91: EXCELENTE

*/

function studentSituation(studentNote){
  let studentStatus = ''
  if (studentNote <= 10) studentStatus = 'PÉSSIMO'
  else if (studentNote >= 11 && studentNote <= 30) studentStatus = 'RUIM'
  else if (studentNote >= 31 && studentNote <= 50) studentStatus = 'REGULAR'
  else if (studentNote >= 51 && studentNote <= 70) studentStatus = 'MEDIANO'
  else if (studentNote >= 71 && studentNote <= 90) studentStatus = 'ÓTIMO'
  else studentStatus = 'EXCELENTE'
  return studentStatus
}

module.exports = studentSituation;
