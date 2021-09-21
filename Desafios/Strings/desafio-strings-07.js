/*

07 - Contem "a" ?

Escreva um algoritmo que recebe uma palavra e checa se ela possui a letra "a" considerando as seguintes premissas para cada tipo de retorno.

Se apenas começa com letra "a":
retornar: A palavra X possui a letra 'a' apenas no início.

Se apenas termina com a letra "a".
retornar: A palavra X possui a letra 'a' apenas no final.

Se apenas termina e começa com a letra "a".
retornar: A palavra X possui a letra 'a' apenas no começo e no fim da palavra.

Se apenas possui o "a" sem o mesmo ser a primeira ou a última letra da palavra.
retornar: A palavra X possui 'a', porém ela não está nem no início nem no fim.

Se não.
Retornar 'A palavra X não contém "a".'

*/

function includeA(word) {
  // Desenvolva seu código nessa função
  const newWord = word.toLowerCase();
  const wordsBegin = newWord.startsWith("a");
  const wordsEnd = newWord.endsWith("a");
  const contain = newWord.substr(1, newWord.length - 2).includes("a");

  if (wordsBegin && !wordsEnd && !contain) {
    return "A palavra " + word + " possui a letra 'a' apenas no início.";
  }
  if (!wordsBegin && wordsEnd && !contain) {
    return "A palavra " + word + " possui a letra 'a' apenas no fim.";
  }

  if (wordsBegin && wordsEnd && !contain) {
    return (
      "A palavra " +
      word +
      " possui a letra 'a', porém ela não está nem no início nem no fim."
    );
  }

  if (!wordsBegin && !wordsEnd && contain) {
    return (
      "A palavra " +
      word +
      " possui a letra 'a', porém ela não é a primeira nem a última letra."
    );
  }
  return "A palavra " + word + " não contém a letra 'a'.";
}

module.exports = includeA;
