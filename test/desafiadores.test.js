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

const mock8 = {
  liverpool: 4,
  chelsea: 1,
  arsenal: 2,
  city: 2,
};

const mockResult11 = [
  {
    degree: "II",
    triad: ["Ré", "Fá", "Lá"],
  },
  {
    degree: "V",
    triad: ["Sol", "Si", "Ré"],
  },
  {
    degree: "I",
    triad: ["Dó", "Mi", "Sol"],
  },
];

/* Gabarito */
const {
  cnhProcess,
  squareRoot,
  musicalNotes,
  musicalNotes2,
  magicWand,
  averagedExpensive,
  averageTemperature,
  numberTies,
  viewerTvShows,
  negateNumbers,
} = require("../Desafios/Desafiadores/Gabaritos/1-10");

const {
  musicalNotes3,
  factorial,
  fibonnaci,
  sumPrimesNumbers,
  // fatorial
  cpfValidator,
} = require("../Desafios/Desafiadores/Gabaritos/11-16");

describe("Desafios Desafiadores.", () => {
  describe(" 01- Testando a Função cnhProcess.", () => {
    const currentYear = new Date().getFullYear();
    const birthSuccess = 2000;
    const birthError = currentYear - 10;
    const ageSuccess = currentYear - birthSuccess;
    const ageError = currentYear - birthError;
    it("Verifica o retorno quando é possível dar entrada na CNH.", () => {
      expect(cnhProcess("Daniel", birthSuccess)).toEqual(
        `Daniel tem ${ageSuccess} anos de idade e pode iniciar o processo.`
      );
    });
    it("Verifica o retorno quando NÃO é possível dar entrada na CNH.", () => {
      expect(cnhProcess("João", birthError)).toEqual(
        `João tem ${ageError} anos de idade e não pode iniciar o processo.`
      );
    });
  });

  describe(" 02- Testando a Função squareRoot.", () => {
    it("Verifica o retorno para um quadrado perfeito.", () => {
      expect(squareRoot(25)).toEqual("A raiz quadrada de 25 é: 5.");
    });
    it("Verifica o retorno para uma raiz não exata.", () => {
      expect(squareRoot(30)).toEqual("Não existe raiz exata para o número 30.");
    });
    it("Verifica o retorno para entrada Zero.", () => {
      expect(squareRoot(0)).toEqual("Número inválido.");
    });
    it("Verifica o retorno para entrada não numérica.", () => {
      expect(squareRoot("24")).toEqual("Número inválido.");
    });
  });

  describe(" 03- Testando a Função musicalNotes.", () => {
    it("Verifica o retorno correto dos graus.", () => {
      expect(musicalNotes(["Ré", "Sol", "Dó"])).toEqual(["II", "V", "I"]);
    });
  });

  describe(" 04- Testando a Função musicalNotes2.", () => {
    it("Verifica o retorno correto dos graus, terças e escala.", () => {
      expect(musicalNotes2(["Ré", "Sol", "Dó"])).toEqual(mock4);
    });
  });

  describe(" 05- Testando a Função magicWand.", () => {
    it("Verifica o retorno correto conforme a tabela.", () => {
      expect(magicWand("Harry Potter", "Azevinho e Pena de Fênix")).toEqual(
        "Curioso... muito curioso..."
      );
    });
    it("Verifica o retorno correto caso a escolha seja diferente da tabela.", () => {
      expect(
        magicWand("Alvo Dumbledore", "Nogueira e Fibra de Dragão")
      ).toEqual("Não, não! Decididamente, não!");
    });
  });

  describe(" 6- Testando a Função averagedExpensive.", () => {
    it("Verifica o retorno correto da mensagem com dados dos produtos.", () => {
      expect(averagedExpensive(mock6)).toEqual(
        "O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
      );
    });
  });

  describe(" 7- Testando a Função averageTemperature.", () => {
    it("Verifica o retorno correto da médica da temperatura", () =>
      expect(
        averageTemperature([98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80])
      ).toEqual("A média anual de temperatura em graus Celsius é 30.05."));
  });

  describe(" 08- Testando a Função numberTies .", () => {
    it("Verifica o retorno correto de empates.", () => {
      expect(numberTies(2, mock8)).toEqual(3);
    });
  });

  describe(" 09- Testando a Função viewerTvShows.", () => {
    it("Verifica o retorno correto para o perfil UFC.", () => {
      expect(
        viewerTvShows({
          age: 17,
          country: "Brasil",
          likeSports: true,
        })
      ).toEqual("UFC");
    });
    it("Verifica o retorno correto para o perfil The Simpsons.", () => {
      expect(
        viewerTvShows({
          age: 17,
          country: "Brasil",
          likeSports: false,
        })
      ).toEqual("The Simpsons");
    });
    it("Verifica o retorno correto para o perfil The Penguins of Madagascar.", () => {
      expect(
        viewerTvShows({
          age: 15,
          country: "Chile",
          likeSports: false,
        })
      ).toEqual("The Penguins of Madagascar");
    });
    it(".", () => {
      expect(
        viewerTvShows({
          age: 15,
          country: "Argentina",
          likeSports: true,
        })
      ).toEqual("Sport Fishing.");
    });
    it("Verifica o retorno caso não seja possível a classificação.", () => {
      expect(
        viewerTvShows({
          age: 20,
          country: "Chile",
          likeSports: true,
        })
      ).toEqual("Não foi possível dizer o que ela deve assistir.");
    });
  });

  describe(" 10- Testando a Função negateNumbers.", () => {
    it("Verifica o retorno do array com números negados.", () => {
      expect(negateNumbers([1, 3, 4])).toEqual([-1, -3, -4]);
    });
  });

  describe(" 11- Testando a Função musicalNotes3.", () => {
    it("Verifica o retorno do objeto com informações musicais..", () => {
        expect(musicalNotes3(["Ré", "Sol", "Dó"])).toEqual(mockResult11);
    });
  });

  describe(" 12- Testando a Função factorial.", () => {
    it("Verifica o retorno correto para para o número 5.", () => {
      expect(factorial(5)).toEqual(120);
    });
    it("Verifica o retorno correto para o número 1.", () => {
      expect(factorial(1)).toEqual(1);
    });
    it("Verifica o retorno correto para o número 2.", () => {
      expect(factorial(2)).toEqual(2);
    });
  });

  describe(" 13- Testando a Função fibonnaci.", () => {
    it("Verifica o retorno para posição 1.", () => {
      expect(fibonnaci(1)).toEqual(0);
    });
    it("Verifica o retorno para posição 2.", () => {
      expect(fibonnaci(2)).toEqual(1);
    });
    it("Verifica o retorno para posição 3.", () => {
      expect(fibonnaci(3)).toEqual(1);
    });
    it("Verifica o retorno para posição 5.", () => {
      expect(fibonnaci(5)).toEqual(3);
    });
  });

  describe(" 14- Testando a Função sumPrimesNumbers.", () => {
    it("Verifica o retorno da soma.", () => {
      expect(sumPrimesNumbers()).toEqual(2276);
    });
  });

/*   describe(" 15- Testando a Função fatorial.", () => {
    it(".", () => {
      expect().toEqual();
    });
  }); */

  describe(" 16- Testando a Função cpfValidator.", () => {
    it("Verifica o retorno para o CPF 000-000-000-00.", () => {
      expect(cpfValidator("000-000-000-00")).toEqual("CPF inválido");
    });
    it("Verifica o retorno para o CPF 397-606-448-34.", () => {
      expect(cpfValidator("397-606-448-34")).toEqual("CPF inválido");
    });
    it("Verifica o retorno para o CPF 166.354.840-43.", () => {
      expect(cpfValidator("166.354.840-43")).toEqual("CPF válido");
    });
  });
});
