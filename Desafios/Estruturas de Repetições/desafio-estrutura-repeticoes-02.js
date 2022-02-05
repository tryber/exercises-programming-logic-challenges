/*

02 - Contar até 10

Maria está aprendendo lógica de programação e recebeu o seguinte código:

  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
  }

Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.

*/



  let accumulator = 1;
  let limit = 10;


  for (let contador = 0; contador <= limit; contador += 1) {
	  accumulator = accumulator + 1; // 12
	  
  }

  console.log(accumulator);


accumulator(10)

