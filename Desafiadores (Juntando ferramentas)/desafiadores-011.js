// 11 - Array de notas musicais - 3 
// Uma música normalmente é uma sequência de notas.
// Dada a escala maior natural de Dó, cada uma das 7 notas possui um grau, representado por um algorismo romano.
// Dó Ré  Mi  Fá Sol Lá Si
// I  II  III IV  V  VI VII
// Além disso, cada nota forma um acorde chamado tríade. A tríade é composta por uma sequência a partir dela com a "primeira" nota, a "terça" e a "quinta".
// Exemplos
// Tríade de Dó: Dó (a primeira), Mi (a terça), Sol (a quinta).
// Tríade de Ré: Ré (a primeira), Fá (a terça), Lá (a quinta).
// Escreva um código que recebe um array de notas, e retorna array de objetos, com os graus das notas na escala de dó e as notas que formam sua tríade no seguinte formato:
// Entrada: ['Ré', 'Sol', 'Dó'] 
// Saída:
// [
//   {
//     degree: 'II',
//     triad: ['Ré', 'Fá', 'Lá']
//   },
//   {
//     degree: 'V',
//     triad: [ 'Sol', 'Si', 'Ré' ]
//   },
//   {
//     degree: 'I',
//     triad: ['Dó', 'Mi', 'Sol']
//   },
// ]


// Desenvolva seu código aqui