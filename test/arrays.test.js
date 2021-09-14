const {
  getMaxNumber,
  getMinNumber,
  findName,
  checkDataTypeValuesArr,
  findMaxAgeSon,
} = require("../Desafios/Arrays/Gabaritos/1-5");

describe("Desafios de Arrays.", () => {
  describe(" 01- Testando a Função GetMaxNumber.", () => {
    it("Verifica se o código está encontrado e retornado o MAIOR valor.", () => {
      expect(getMaxNumber([3, 1, 8, 34, 13, 2, 5])).toEqual(34);
    });
  });

  describe(" 02- Testando a Função getMinNumber.", () => {
    it("Verifica se o código está encontrando e retornando o MENOR valor.", () => {
      expect(getMinNumber([3, 1, 8, 34, 13, 2, 5])).toEqual(1);
    });
  });

  describe(" 03 - Testando a Função findName.", () => {
    it("Verifica se o código está retornando a mensagem correta em caso de SUCESSO.", () => {
      expect(
        findName(
          ["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"],
          "Mica"
        )
      ).toEqual("O nome está na lista.");
    });
    it("Verifica se o código está retornando a mensagem correta em caso de INSUCESSO.", () => {
      expect(
        findName(
          ["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"],
          "Daniel"
        )
      ).toEqual("O nome não está na lista.");
    });
  });

  describe(" 04 - Testando a Função checkDataTypeValuesArr.", () => {
    it("Verifica se o código está retornando o valor booleano correto em caso de SUCESSO.", () => {
      expect(checkDataTypeValuesArr(["Daniel", "John", 1])).toEqual(false);
    });
    it("Verifica se o código está retornando o valor booleano correto em caso de INSUCESSO", () => {
      expect(checkDataTypeValuesArr(["Daniel", "John", "Marcos"])).toEqual(
        true
      );
    });
  });

  describe(" 05 - Testando a Função findMaxAgeSon.", () => {
    it("Verifica se o código esta retornando a mensagem correta.", () => {
      expect(findMaxAgeSon(40, [10, 10, 10])).toEqual(
        "O filho mais velho tem 10 anos"
      );
    });
  });
});
