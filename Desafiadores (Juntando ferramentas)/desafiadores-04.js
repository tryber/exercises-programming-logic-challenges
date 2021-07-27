// 04 - Array de notas musicais - 2
// Uma música normalmente é uma sequência de notas.
// Dada a escala maior natural de Dó, cada uma das 7 notas possui:
// - um grau, representado por um algorismo romano
// - uma "terça" maior ou menor.
// - uma escala própria
// Nota     Dó     Ré      Mi      Fá     Sol        Lá     Si
// Grau     I      II      III     IV     V          VI     VII
// Terça    Maior  Menor   Menor   Maior  Maior      Menor  Menor
// Escala   Jônia  Dórica  Frígia  Lídia  Mixolídia  Eólia  Lócrio
// Escreva um código que recebe um array de notas, e retorna um array com um objeto com os graus, as terças das notas e as escalas.
// Ex: 
// Entrada: ['Ré', 'Sol', 'Dó']
// Saída:
// [
//   {
//     degree: 'II',
//     third: 'Menor',
//     scale: 'Dórica',
//   },
//   {
//     degree: 'V',
//     third: 'Maior',
//     scale: 'Mixolódia'
//   },
//   {
//     degree: 'I',
//     third: 'Maior',
//     scale: 'Jônia'
//   }
// ] 


// Desenvolva seu código aqui