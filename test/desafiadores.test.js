const mock4 = [
  {
    degree: "II",
    third: "Menor",
    scale: "Dórica",
  },
  {
    degree: "V",
    third: "Maior",
    scale: "Mixolídia",
  },
  {
    degree: "I",
    third: "Maior",
    scale: "Jônia",
  },
];
const mock6 = [
  { name: "lápis", price: 2 },
  { name: "borracha", price: 4 },
  { name: "caneta", price: 5 },
  { name: "régua", price: 6 },
  { name: "apontador", price: 3 },
  { name: "teclado gamer", price: 180 },
  { name: "mochila", price: 33 },
  { name: "fone de ouvido", price: 57 },
  { name: "mousepad", price: 35 },
];

const {
  checkCnhProcess,
  calcSquareRoot,
  arrMusicalNotes,
  arrMusicalNotes2,
  findMagicWand,
  calcAverageAndExpensive,
  averageTemperature,
  /*
  calcNumberOfTies,
  negateNumbers,  */
} = require("../Desafiadores (Juntando ferramentas)/Gabaritos/gabaritos1-10");

describe("Desafios Desafiadores.", () => {
  describe(" 01- Testando a Função checkCnhProcess.", () => {
    const currentYear = new Date().getFullYear();
    const birthSuccess = 2000;
    const birthError = currentYear - 10;
    const ageSuccess = currentYear - birthSuccess;
    const ageError = currentYear - birthError;
    it("Verifica se o código está retornando a mensagem de forma correta em caso ser possível iniciar o processo de CNH.", () => {
      expect(checkCnhProcess("Daniel", birthSuccess)).toEqual(
        `Daniel tem ${ageSuccess} anos de idade e pode iniciar o processo.`
      );
    });
    it("Verifica se o código está retornando a mensagem de forma correta em caso de NÃO ser possível iniciar o processo de CNH.", () => {
      expect(checkCnhProcess("João", birthError)).toEqual(
        `João tem ${ageError} anos de idade e não pode iniciar o processo.`
      );
    });
  });
  describe(" 02- Testando a Função checkCnhProcess.", () => {
    it("Verifica se o código está retornando a mensagem correta em caso de quadrado perfeito.", () => {
      expect(calcSquareRoot(25)).toEqual("A raiz quadrada de 25 é: 5.");
    });
    it("Verifica se o código está retornando a mensagem correta em caso de raiz não exata.", () => {
      expect(calcSquareRoot(30)).toEqual(
        "Não existe raiz exata para o número 30."
      );
    });
    it("Verifica se o código está retornando a mensagem correta em caso do argumento passado ser zero.", () => {
      expect(calcSquareRoot(0)).toEqual("Número inválido.");
    });
    it("Verifica se o código está retornando a mensagem correta em caso do argumento passado não for do tipo número.", () => {
      expect(calcSquareRoot("24")).toEqual("Número inválido.");
    });
  });
  describe(" 03 - Testando a Função arrMusicalNotes.", () => {
    it("Verifica se o código está retornado a mensagem corretamente", () => {
      expect(arrMusicalNotes(["Ré", "Sol", "Dó"])).toEqual(["II", "V", "I"]);
    });
  });
  describe(" 04 - Testando a Função arrMusicalNotes2.", () => {
    it("Verifica se o código está retornado a mensagem corretamente", () => {
      expect(arrMusicalNotes2(["Ré", "Sol", "Dó"])).toEqual(mock4);
    });
  });
  describe(" 05 - Testando a Função findMagicWand.", () => {
    it("Verifica se o código está retornando a mensagem corretamente quando a varinha escolhe conforme a tabela.", () => {
      expect(findMagicWand("Harry Potter", "Azevinho e Pena de Fênix")).toEqual(
        "Curioso... muito curioso..."
      );
    });
    it("Verifica se o código está retornando a mensagem corretamente quando a varinha escolhe DIFERENTE da tabela.", () => {
      expect(
        findMagicWand("Alvo Dumbledore", "Nogueira e Fibra de Dragão")
      ).toEqual("Não, não! Decididamente, não!");
    });
  });
  describe(" 6 - Testando a Função calcAverageAndExpensive.", () => {
    it("Verifica se o código está retornando a mensagem corretamente", () => {
      expect(calcAverageAndExpensive(mock6)).toEqual(
        "O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
      );
    });
  });
  describe(" 7 - Testando a Função averageTemperature.", () => {
    it("Verifica se o código está retornando a mensagem corretamente", () =>
      expect(
        averageTemperature([98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80])
      ).toEqual("A média anual de temperatura em graus Celsius é 30.05."));
  });

  describe(" 08- Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });
  describe(" 09 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 10 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 11 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 12 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 13 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 14 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 15 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 16 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });
});
