/*

07 - Calcule o tempo de leitura

Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas.
Após 2 minutos ela tinha lido  4 páginas. 

Escreva um algoritmo que calcula e retorne o tempo em minutos que Ana levará para ler todo o livro no total no seguinte formato:

---------------------------------------------
"Ana levará x minutos para ler o livro todo." 
---------------------------------------------

*/

function readingTime(totalPages, readPages, minutes){
  const totalMinutes = totalPages / (readPages / minutes);
  return `Ana levará ${totalMinutes} minutos para ler o livro todo`;
}

module.exports = readingTime;
