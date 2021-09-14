/* 
04 - Array de notas musicais - 2

Relembrando que uma música normalmente possui uma sequência de notas.

Dada a escala Natural de Dó, cada uma das 7 notas possui:

* um grau representando po algarismo romano.
* uma "terça" maior ou menor.
* uma escala própria.

| Nota   | Dó    | Ré     | Mi     | Fá    | Sol       | Lá     | Si     |
| Grau   | I     | II     | III    | IV    | V         | VI     | VII    |
| Terça  | Maior | Menor  | Menor  | Maior | Maior     | Menor  | Menor  |
| Escala | Jônia | Dórica | Frígia | Lídia | Mixolídia | Eólia  | Lócrio |

Escreva um algoritmo que recebe um array de notas e retorna um outro array de objetos com os respectivos graus, terças e escalas das respectivas notas, por exemplo:

Entrada: ['Ré', 'Sol', 'Dó']
Saída:
[
  {
    degree: 'II',
    third: 'Menor',
    scale: 'Dórica',
  },
  {
    degree: 'V',
    third: 'Maior',
    scale: 'Mixolídia'
  },
  {
    degree: 'I',
    third: 'Maior',
    scale: 'Jônia'
  }
] 

*/
