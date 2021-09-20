const mockRes6 =
  "1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49.";

const mockRes8 =
  "200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100.";

const {
  decodeString,
  accumulator,
  accumulatorThousand,
  repeatName,
  numbersDivisibleBy3,
  oddNumbers,
  findIndexOf,
  sortDec,
  includesInArrays,
} = require("../Desafios/Estruturas de Repetições/Gabaritos/1-9");

describe("Desafios de Estruturas de Repetições.", () => {
  describe(" 01 - Testando a Função decodeString.", () => {
    it("Verifica se o dado retornado é do tipo string.", () => {
      expect(typeof decodeString("test")).toEqual("string");
    });
    it("Verifica o retorno correto para a palavra 'xablauzinho'.", () => {
      expect(decodeString("decodeString")).toEqual("03691215182124273033");
    });
    it("Verifica o retorno correto para a palavra 'Trybe'.", () => {
      expect(decodeString("Trybe")).toEqual("036912");
    });
  });
  describe(" 02 - Testando a Função accumulator.", () => {
    it("Verifica o retorno correto para o argumento 1.", () => {
      expect(accumulator(1)).toEqual(1);
    });
    it("Verifica o retorno correto para o argumento 2.", () => {
      expect(accumulator(2)).toEqual(3);
    });
    it("Verifica o retorno correto para o argumento 100.", () => {
      expect(accumulator(100)).toEqual(5050);
    });
  });

  describe(" 03 - Testando a Função accumulatorThousand.", () => {
    it("Verifica o retorno correto da soma da sequência de 0 a 1000.", () => {
      expect(accumulatorThousand()).toEqual("A soma de 1 até 1000 é 500500.");
    });
  });

  describe(" 04 - Testando a Função repeatName.", () => {
    it("Verifica o retorno em caso de repetir o nome apenas uma única vez.", () => {
      expect(repeatName("Daniel", 1)).toEqual("Daniel.");
    });
    it("Verifica o retorno em caso de repetir o nome duas vezes.", () => {
      expect(repeatName("Daniel", 2)).toEqual("Daniel, Daniel.");
    });
    it("Verifica o retorno em caso de repetir o nome três vezes.", () => {
      expect(repeatName("Daniel", 3)).toEqual("Daniel, Daniel, Daniel.");
    });
  });

  describe(" 05 - Testando a Função numbersDivisibleBy3.", () => {
    it("Verifica o retorno correto para sequência de 1 a 10.", () => {
      expect(numbersDivisibleBy3(1, 10)).toEqual("Sequência muito pequena.");
    });
    it("Verifica o retorno correto para sequência de 1 a 146.", () => {
      expect(numbersDivisibleBy3(1, 150)).toEqual(
        "Há 50 ou mais números diviseis por 3."
      );
    });
  });

  describe(" 06 - Testando a Função oddNumbers.", () => {
    it("Verifica o retorno da lista para sequência de 1 a 50.", () => {
      expect(oddNumbers()).toEqual(mockRes6);
    });
  });

  describe(" 07 - Testando a Função findIndexOf.", () => {
    it("Verifica o retorno em caso de sucesso para o index 0.", () => {
      expect(findIndexOf([1, 2, 3, 4], 1)).toEqual(0);
    });
    it("Verifica o retorno em caso de sucesso para o index 1.", () => {
      expect(findIndexOf([1, 2, 3, 4], 2)).toEqual(1);
    });
    it("Verifica o retorno em caso de sucesso para sendo o elemento o último index.", () => {
      expect(findIndexOf([1, 2, 3, 4], 4)).toEqual(3);
    });
  });

  describe("08- Testando a Função sortDec.", () => {
    it("Verifica o retorno da string correta para sequencia de 200 a 100.", () => {
      expect(sortDec()).toEqual(mockRes8);
    });
  });

  describe("09 - Testando a Função includesInArrays.", () => {
    it("Verifica o retorno de um array para os argumentos com arrays vazios.", () => {
      expect(includesInArrays([], [])).toEqual([]);
    });
    it("Verifica o retorno de um array para os argumentos: [1, 2, 4, 5, 6], [3, 9, 8, 5, 0, 2] .", () => {
      expect(includesInArrays([1, 2, 4, 5, 6], [3, 9, 8, 5, 0, 2])).toEqual([2, 5]);
    });
  });
});
