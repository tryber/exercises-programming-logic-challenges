const {
  stringMock: { test9, resp9 },
} = require("../test/mocks");
/* Gabaritos */
/* const {
  reverseNames,
  converteType,
  personalPresentation,
  mathOperations,
  firstLastLetter,
  dogName,
  includeA,
  countLetters,
  encodeMessage, 
} = require("../Desafios/Strings/Gabaritos/1-9"); */

const {
  reverseNames,
  converteType,
  personalPresentation,
  mathOperations,
  firstLastLetter,
  dogName,
  includeA,
  countLetters,
  encodeMessage,
} = require("../Desafios/Strings");

describe("Desafios de Strings.", () => {
  describe(" 01 - Testando a Função reverseNames .", () => {
    it("Verifica o retorno dos nomes invertidos.", () => {
      expect(reverseNames("Márcio Daniel")).toEqual("Daniel Márcio");
    });
  });

  describe(" 02 - Testando a Função converteType.", () => {
    it(".Verifica o retorno da transformação de string para number.", () => {
      expect(converteType("1")).toEqual(1);
    });
  });

  describe(" 03 - Testando a Função personalPresentation.", () => {
    it("Verifica o retorno para apresentação.", () => {
      expect(personalPresentation("Márcio", "Daniel", 35)).toEqual(
        "Meu nome é Márcio Daniel e tenho 35 anos de vida."
      );
    });
  });

  describe(" 04 - Testando a Função mathOperations.", () => {
    it("Verifica o retorno para as 4 operações básicas matemáticas.", () => {
      expect(mathOperations(1, 1)).toEqual(
        "1 + 1 = 2. 1 - 1 = 0. 1 x 1 = 1. 1 / 1 = 1."
      );
    });
  });

  describe(" 05 - Testando a Função firstLastLetter.", () => {
    it("Verifica o retorno da primeira e última letras de uma palavra.", () => {
      expect(firstLastLetter("Xablau")).toEqual(
        "A primeira letra é: X e a última letra é: u."
      );
    });
  });

  describe(" 06 - Testando a Função dogName.", () => {
    it("Verifica o retorno do nome do cachorrinho =)....", () => {
      expect(dogName("Chips", "pudim")).toEqual(
        "O cachorrinho de Joana vai se chamar: Chidim"
      );
    });
  });

  describe(" 07 - Testando a Função includeA.", () => {
    it("Verifica o retorno quando possui 'a' apenas no começo e no fim.", () => {
      expect(includeA("Aninha")).toEqual(
        "A palavra Aninha possui a letra 'a', porém ela não está nem no início nem no fim."
      );
    });
    it("Verifica o retorno quando possui 'a' apenas no começo e no fim.", () => {
      expect(includeA("ana")).toEqual(
        "A palavra ana possui a letra 'a', porém ela não está nem no início nem no fim."
      );
    });
    it("Verifica o retorno quando possui 'a' apenas como primeira letra.", () => {
      expect(includeA("Amém")).toEqual(
        "A palavra Amém possui a letra 'a' apenas no início."
      );
    });
    it("Verifica o retorno quando possui 'a' apenas como última letra.", () => {
      expect(includeA("Lua")).toEqual(
        "A palavra Lua possui a letra 'a' apenas no fim."
      );
    });
    it("Verifica o retorno quando possui não possui a letra 'a'.", () => {
      expect(includeA("esquivo")).toEqual(
        "A palavra esquivo não contém a letra 'a'."
      );
    });
  });

  describe(" 08 - Testando a Função countLetters.", () => {
    it("Verifica o retorno para a palavra Abacate.", () => {
      expect(countLetters("Abacate", "a")).toEqual(3);
    });
    it("Verifica o retorno para a frase 'Ando devagar porque já tive pressa' .", () => {
      expect(countLetters("Ando de vagar porque já tive pressa", "a")).toEqual(
        5
      );
    });
    it("Verifica o retorno para string 'àáäâã' .", () => {
      expect(countLetters("àáäâã", "a")).toEqual(5);
    });
    it("Verifica o retorno para string 'àáäâã' .", () => {
      expect(countLetters("àáäâã", "a")).toEqual(5);
    });
    it("Verifica o retorno para string 'èéëê' .", () => {
      expect(countLetters("èéëê", "e")).toEqual(4);
    });
    it("Verifica o retorno para string 'àáäâã' .", () => {
      expect(countLetters("ìíïî", "i")).toEqual(4);
    });
    it("Verifica o retorno para string 'àáäâã' .", () => {
      expect(countLetters("òóöô", "o")).toEqual(4);
    });
    it("Verifica o retorno para string 'ùúüû' .", () => {
      expect(countLetters("ùúüû", "u")).toEqual(4);
    });
  });

  describe(" 09- Testando a Função encodeMessage.", () => {
    it("Verifica o retorno para a mensagem aeiou.", () => {
      expect(encodeMessage("aeiou")).toEqual("5b9p1");
    });
    it("Verifica o retorno para um trecho de música.", () => {
      expect(encodeMessage(test9)).toEqual(resp9);
    });
  });
});
