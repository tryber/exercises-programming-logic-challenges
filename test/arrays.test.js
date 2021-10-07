/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */

/* Gabaritos */
/* const {
  getMaxNumber,
  getMinNumber,
  findQuest,
  dataType,
  findOldestSon,
} = require("../Desafios/Arrays/Gabaritos/1-5"); */

/* Exercícios */
const {
  getMaxNumber,
  getMinNumber,
  findQuest,
  dataType,
  findOldestSon,
} = require("../Desafios/Arrays/");

describe("Desafios de Arrays.", () => {
  describe("01 - Testando a Função getMaxNumber.", () => {
    it("Ao passar o argumento [3, 1, 8, 34, 13, 2, 5], deve retornar: 34", () => {
      expect(getMaxNumber([3, 1, 8, 34, 13, 2, 5])).toBe(34);
    });
    it("Ao passar o argumento [-8, 12, 13, 84, -100, 45, 38], deve retornar: 84", () => {
      expect(getMaxNumber([-8, 12, 13, 84, -100, 45, 38])).toBe(84);
    });
  });

  describe("02 - Testando a Função getMinNumber.", () => {
    it("Ao passar o argumento [3, 1, 8, 34, 13, 2, 5], deve retornar: 1", () => {
      expect(getMinNumber([3, 1, 8, 34, 13, 2, 5])).toBe(1);
    });
    it("Ao passar o argumento [-8, 12, 13, 84, -100, 45, 38], deve retornar: -100", () => {
      expect(getMinNumber([-8, 12, 13, 84, -100, 45, 38])).toBe(-100);
    });
  });

  describe("03 - Testando a Função findQuest.", () => {
    it("Ao passar os argumentos ['Silvia', 'Isa', 'Mica', 'Amanda'] e 'Mica', deve retornar: 'O nome está na lista.'", () => {
      expect(findQuest(['Silvia', 'Isa', 'Mica', 'Amanda'], 'Mica')).toBe(
        "O nome está na lista."
      );
    });
    it("Ao passar os argumentos ['Bruna', 'Joaquim', 'Julia', 'Amanda'] e 'Daniel', deve retornar: 'O nome não está na lista.'", () => {
      expect(findQuest(['Silvia', 'Isa', 'Mica', 'Amanda'], 'Daniel')).toBe(
        'O nome não está na lista.'
      );
    });
  });

  describe("04 - Testando a Função dataType.", () => {
    it("Ao passar o argumento ['Daniel', 'John', 'Marcos'], deve retornar: true", () => {
      expect(dataType(['Daniel', 'John', 'Marcos'])).toBe(true);
    });
    it("Ao passar o argumento ['Daniel', 'John', 1], deve retornar: false", () => {
      expect(dataType(["Daniel", "John", 1])).toBe(false);
    });
    it("Ao passar o argumento [ 40, 121, -14], deve retornar: true", () => {
      expect(dataType([40, 121, -14])).toBe(true);
    });
    it("Ao passar o argumento [true, false, true], deve retornar: true", () => {
      expect(dataType([true, false, true])).toBe(true);
    });
    it("Ao passar o argumento [true, false, 0], deve retornar: false", () => {
      expect(dataType([true, false, 0])).toBe(false);
    });
  });

  describe("05 - Testando a Função findOldestSon.", () => {
    it("Ao passar os argumentos 40 e [10, 10, 10], deve retornar: 'O filho mais velho tem 10 anos.'", () => {
      expect(findOldestSon(40, [10, 10, 10])).toBe(
        "O filho mais velho tem 10 anos."
      );
    });
    it("Ao passar os argumentos 60 e [12, 16, 20], deve retornar: 'O filho mais velho tem 21 anos.'", () => {
      expect(findOldestSon(60, [11, 16, 12])).toBe(
        "O filho mais velho tem 21 anos."
      );
    });
    it("Ao passar os argumentos 40 e [10, 7, 14], deve retornar: 'O filho mais velho tem 14 anos.'", () => {
      expect(findOldestSon(40, [10, 7, 14])).toEqual(
        "O filho mais velho tem 14 anos."
      );
    });
  });
});
