/* Gabarito */
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
} = require("../Desafios/Arrays/")

describe("Desafios de Arrays.", () => {
  describe(" 01- Testando a Função getMaxNumber.", () => {
    it("Verifica o retorno do Maior valor de uma lista de números.", () => {
      expect(getMaxNumber([3, 1, 8, 34, 13, 2, 5])).toEqual(34);
    });
  });

  describe(" 02- Testando a Função getMinNumber.", () => {
    it("Verifica o retorno do Menor valor de uma lista de números.", () => {
      expect(getMinNumber([3, 1, 8, 34, 13, 2, 5])).toEqual(1);
    });
  });

  describe(" 03- Testando a Função findQuest.", () => {
    it("Verifica o retorno quando o nome é encontrado na lista.", () => {
      expect(
        findQuest(["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"], "Mica")
      ).toEqual("O nome está na lista.");
    });
    it("Verifica o retorno quando o nome NÃO é encontrado na lista.", () => {
      expect(
        findQuest(
          ["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"],
          "Daniel"
        )
      ).toEqual("O nome não está na lista.");
    });
  });

  describe(" 04- Testando a Função dataType.", () => {
    it("Verifica o retorno quando os dados do array são todos do mesmo tipo.", () => {
      expect(dataType(["Daniel", "John", "Marcos"])).toEqual(true);
    });
    it("Verifica o retorno quando os dados do array NÃO são todos do mesmo tipo.", () => {
      expect(dataType(["Daniel", "John", 1])).toEqual(false);
    });
  });

  describe(" 05- Testando a Função findOldestSon.", () => {
    it("Verifica o retorno das informações do filho mais velho.", () => {
      expect(findOldestSon(40, [10, 10, 10])).toEqual(
        "O filho mais velho tem 10 anos."
      );
    });
  });
});
