const {
  estruturasDeRepeticoes: { mockRes6, mockRes8 },
} = require("./mocks");
/*
 É importada nesse arquivo tanto as funções do gabarito quanto dos desafios 
*/
/* Gabaritos */
/* const {
  encode,
  accumulator,
  accumulatorThousand,
  repeatName,
  numbersDivisibleBy3,
  oddNumbers,
  findIndexOf,
  sortDec,
  includesArrays,
} = require("../Desafios/Estruturas de Repetições/Gabaritos/1-9"); */

/* Exercícios */
 const {
  encode,
  accumulator,
  accumulatorThousand,
  repeatName,
  numbersDivisibleBy3,
  oddNumbers,
  findIndexOf,
  sortDec,
  includesArrays,
} = require("../Desafios/Estruturas de Repetições")

describe("Desafios de Estruturas de Repetições.", () => {
  describe("01 - Testando a Função encode.", () => {
    it("Ao passar o argumento 'encode', deve retornar: '03691215'", () => {
      expect(encode("encode")).toBe("03691215");
    });
    it("Ao passar o argumento 'Trybe', deve retornar: '036912'", () => {
      expect(encode("Trybe")).toBe("036912");
    });
  });
  describe("02 - Testando a Função accumulator.", () => {
    it("Ao passar o argumento 1, deve retornar: 1", () => {
      expect(accumulator(1)).toBe(1);
    });
    it("Ao passar o argumento 2, deve retornar: 3", () => {
      expect(accumulator(2)).toBe(3);
    });
    it("Ao passar o argumento 100, deve retornar: 5050", () => {
      expect(accumulator(100)).toBe(5050);
    });
  });

  describe("03 - Testando a Função accumulatorThousand.", () => {
    it("Deve retornar: 'A soma de 1 até 1000 é 500500.'", () => {
      expect(accumulatorThousand()).toBe("A soma de 1 até 1000 é 500500.");
    });
  });

  describe("04 - Testando a Função repeatName.", () => {
    it("Ao passar os argumentos 'Daniel e 1, deve retornar: 'Daniel.'", () => {
      expect(repeatName("Daniel", 1)).toBe("Daniel.");
    });
    it("Ao passar os argumentos 'Fábio' e 2, deve retornar: 'Fábio, Fábio.'", () => {
      expect(repeatName("Fábio", 2)).toBe("Fábio, Fábio.");
    });
    it("Ao passar os argumentos 'Zé' e 3, deve retornar: 'Zé, Zé, Zé.'", () => {
      expect(repeatName("Zé", 3)).toBe("Zé, Zé, Zé.");
    });
  });

  describe("05 - Testando a Função numbersDivisibleBy3.", () => {
    it("Ao passar os argumentos 1 e 10, deve retornar: 'Sequência muito pequena.'", () => {
      expect(numbersDivisibleBy3(1, 10)).toBe("Sequência muito pequena.");
    });
    it("Ao passar os argumentos 1 e 150, deve retornar: 'Há 50 ou mais números diviseis por 3.'", () => {
      expect(numbersDivisibleBy3(1, 150)).toBe(
        "Há 50 ou mais números diviseis por 3."
      );
    });
  });

  describe("06 - Testando a Função oddNumbers.", () => {
    it(`Deve retornar:
          ${mockRes6}`, () => {
      expect(oddNumbers()).toBe(mockRes6);
    });
  });

  describe("07 - Testando a Função findIndexOf.", () => {
    it("Ao passar o argumento [1, 2, 3, 4] e 1, deve retornar: 0 ", () => {
      expect(findIndexOf([1, 2, 3, 4], 1)).toBe(0);
    });
    it("Ao passar o argumento [1, 2, 3, 4] e 2, deve retornar: 1 ", () => {
      expect(findIndexOf([1, 2, 3, 4], 2)).toBe(1);
    });
    it("Ao passar o argumento [1, 2, 3, 4] e 4, deve retornar: 3 ", () => {
      expect(findIndexOf([1, 2, 3, 4], 4)).toBe(3);
    });
  });

  describe("08- Testando a Função sortDec.", () => {
    it(`Deve retornar:
        ${mockRes8}.`, () => {
      expect(sortDec()).toBe(mockRes8);
    });
  });

  describe("09 - Testando a Função includesArrays.", () => {
    it("Ao passar o argumento [] e [] deve retornar: []", () => {
      expect(includesArrays([], [])).toEqual([]);
    });
    it("Ao passar o argumento [1, 2, 4, 5, 6] e [3, 9, 8, 5, 0, 2], deve retornar: [2, 5]", () => {
      expect(includesArrays([1, 2, 4, 5, 6], [3, 9, 8, 5, 0, 2])).toEqual([
        2, 5,
      ]);
    });
  });
});
