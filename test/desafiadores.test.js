const {
  desafiadoresMock: { test4, test6, test8, result11 },
} = require("../test/mocks");

/*
 É importada nesse arquivo tanto as funções do gabarito quanto dos desafios 
*/
/* Gabaritos */
/* const {
  cnhProcess,
  squareRoot,
  musicalNotes,
  musicalNotes2,
  magicWand,
  productAnalysis,
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
  factorial15,
  meanFactorialFromAToB,
  cpfValidator,
} = require("../Desafios/Desafiadores/Gabaritos/11-16"); */

/* 
Exercícios
*/
 const {
  cnhProcess,
  squareRoot,
  musicalNotes,
  musicalNotes2,
  magicWand,
  productAnalysis,
  averageTemperature,
  numberTies,
  viewerTvShows,
  negateNumbers,
  musicalNotes3,
  factorial,
  fibonnaci,
  sumPrimesNumbers,
  factorial15,
  meanFactorialFromAToB,
  cpfValidator,
} = require("../Desafios/Desafiadores");

describe("Desafios Desafiadores.", () => {
  describe("01 - Testando a Função cnhProcess.", () => {
    const currentYear = new Date().getFullYear();
    const birthSuccess = 2000;
    const birthError = currentYear - 10;
    const ageSuccess = currentYear - birthSuccess;
    const ageError = currentYear - birthError;
    it(`Ao passar os argumentos "Daniel" e ${ageSuccess}, deve retornar: 
         "Daniel tem ${ageSuccess} anos de idade e pode iniciar o processo."`, () => {
      expect(cnhProcess("Daniel", birthSuccess)).toBe(
        `Daniel tem ${ageSuccess} anos de idade e pode iniciar o processo.`
      );
    });
    it(`Ao passar os argumentos "João" e ${ageError}, deve retornar:
        "João tem ${ageError} anos de idade e não pode iniciar o processo."`, () => {
      expect(cnhProcess("João", birthError)).toBe(
        `João tem ${ageError} anos de idade e não pode iniciar o processo.`
      );
    });
  });

  describe("02 - Testando a Função squareRoot.", () => {
    it("Ao passar o argumento 9, deve retornar: 'A raiz quadrada de 9 é: 3.'", () => {
      expect(squareRoot(9)).toBe("A raiz quadrada de 9 é: 3.");
    });
    it("Ao passar o argumento 10, deve retornar: 'Não existe raiz exata para o número 10.'", () => {
      expect(squareRoot(10)).toBe("Não existe raiz exata para o número 10.");
    });
    it("Ao passar o argumento 0 'Zero', deve retornar: 'Número inválido.'", () => {
      expect(squareRoot(0)).toBe("Número inválido.");
    });
    it("Ao passar o argumento '25', deve retornar: 'Número inválido.'", () => {
      expect(squareRoot("25")).toBe("Número inválido.");
    });
    it("Ao passar o argumento 'Xablauzinho', deve retornar: 'Número inválido.'", () => {
      expect(squareRoot("Xablauzinho")).toBe("Número inválido.");
    });
  });

  describe("03 - Testando a Função musicalNotes.", () => {
    it("Ao passar o argumento ['Ré', 'Sol', 'Dó'], deve retornar: ['II', 'V', 'I']", () => {
      expect(musicalNotes(["Ré", "Sol", "Dó"])).toEqual(["II", "V", "I"]);
    });
  });

  describe("04 - Testando a Função musicalNotes2.", () => {
    it(`Ao passar o argumento ["Ré", "Sol", "Dó"], deve retornar:
         ${JSON.stringify(test4)}`, () => {
      expect(musicalNotes2(["Ré", "Sol", "Dó"])).toEqual(test4);
    });
  });

  describe("05 - Testando a Função magicWand.", () => {
    it(`Ao passar os argumentos 'Belatriz Lestrange' e 'Azevinho e Pena de Fênix', deve retornar:
         'Curioso... muito curioso...'`, () => {
      expect(magicWand("Harry Potter", "Azevinho e Pena de Fênix")).toBe(
        "Curioso... muito curioso..."
      );
    });
    it(`Ao passar os argumentos 'Rony Weasley' e 'Salgueiro e Pelo de Unicórnio', deve retornar: 
         'Curioso... muito curioso...'`, () => {
      expect(magicWand("Rony Weasley", "Salgueiro e Pelo de Unicórnio")).toBe(
        "Curioso... muito curioso..."
      );
    });
    it(`Ao passar os argumentos 'Hermione Granger' e 'Videira e Fibra de Dragão', deve retornar:
          'Curioso... muito curioso...'`, () => {
      expect(magicWand("Hermione Granger", "Videira e Fibra de Dragão")).toBe(
        "Curioso... muito curioso..."
      );
    });
    it(`Ao passar os argumentos 'Alvo Dumbledore' e 'Salgueiro e Pelo de Testrálio', deve retornar:
         'Curioso... muito curioso...'`, () => {
      expect(magicWand("Alvo Dumbledore", "Salgueiro e Pelo de Testrálio")).toBe(
        "Curioso... muito curioso..."
      );
    });
    it(`Ao passar os argumentos 'Belatriz Lestrange' e 'Nogueira e Fibra de Dragão', deve retornar:
         'Curioso... muito curioso...'`, () => {
      expect(magicWand("Belatriz Lestrange", "Nogueira e Fibra de Dragão")).toBe(
        "Curioso... muito curioso..."
      );
    });

    it(`Ao passar os argumentos 'Belatriz Lestrange' e 'Azevinho e Pena de Fênix', deve retornar:
         'Não, não! Decididamente, não!'`, () => {
      expect(
        magicWand("Alvo Dumbledore", "Nogueira e Fibra de Dragão")
      ).toBe("Não, não! Decididamente, não!");
    });
  });

  describe("6 - Testando a Função productAnalysis.", () => {
    it(`Ao passar o argumento:
        ${JSON.stringify(test6)}
        deve retornar:
      "O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."`, () => {
      expect(productAnalysis(test6)).toBe(
        "O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11.");
    });
  });

  describe("7 - Testando a Função averageTemperature.", () => {
    it(`Ao passar o argumento [98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80], deve retornar:
         "A média anual de temperatura em graus Celsius é 30.05."`, () =>
      expect(
        averageTemperature([98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80])
      ).toBe("A média anual de temperatura em graus Celsius é 30.05."));
  });

  describe("08 - Testando a Função numberTies .", () => {
    it(`Ao passar os argumentos 2 e ${JSON.stringify(test8)}, deve retornar: 8`, () => {
      expect(numberTies(2, test8)).toBe(3);
    });
  });

  describe("09 - Testando a Função viewerTvShows.", () => {
    it(`Ao passar o argumento { age: 17, country: 'Brasil', likeSports: true }, deve retornar:
         'UFC'.`, () => {
      expect(
        viewerTvShows({
          age: 17,
          country: "Brasil",
          likeSports: true,
        })
      ).toBe("UFC.");
    });
    it(`Ao passar o argumento { age: 17, country: 'Brasil', likeSports: false }, deve retornar:
         'The Simpsons.'`, () => {
      expect(
        viewerTvShows({
          age: 17,
          country: "Brasil",
          likeSports: false,
        })
      ).toBe("The Simpsons.");
    });
    it(`Ao passar o argumento { age: 15, country: 'Chile', likeSports: false }, deve retornar:
         'The Penguins of Madagascar.'`, () => {
      expect(
        viewerTvShows({
          age: 15,
          country: "Chile",
          likeSports: false,
        })
      ).toBe("The Penguins of Madagascar.");
    });
    it(`Ao passar o argumento { age: 15, country: 'Argentina', likeSports: true }, deve retornar:
         'Sport Fishing.'.`, () => {
      expect(
        viewerTvShows({
          age: 15,
          country: "Argentina",
          likeSports: true,
        })
      ).toEqual("Sport Fishing.");
    });
    it(`Ao passar o argumento { age: 17, country: 'Chile', likeSports: true }, deve retornar:
         'Não foi possível dizer o que ela deve assistir'.`, () => {
      expect(
        viewerTvShows({
          age: 20,
          country: "Chile",
          likeSports: true,
        })
      ).toEqual("Não foi possível dizer o que ela deve assistir.");
    });
  });

  describe("10 - Testando a Função negateNumbers.", () => {
    it("Ao passar o argumento [1, 3, 4], deve retornar: [-1, -3, -4]", () => {
      expect(negateNumbers([1, 3, 4])).toEqual([-1, -3, -4]);
    });
    it("Ao passar o argumento [-1, -3, -4], deve retornar: [1, 3, 4]", () => {
      expect(negateNumbers([-1, -3, -4])).toEqual([1, 3, 4]);
    });
    it("Ao passar o argumento [-1, 3, 4], deve retornar: [1, -3, 4]", () => {
      expect(negateNumbers([-1, 3, 4])).toEqual([1, -3, -4]);
    });
  });

  describe("11 - Testando a Função musicalNotes3.", () => {
    it(`Ao passar o argumento["Ré", "Sol", "Dó"], deve retornar:
        ${JSON.stringify(result11)}`, () => {
      expect(musicalNotes3(["Ré", "Sol", "Dó"])).toEqual(result11);
    });
  });

  describe("12 - Testando a Função factorial.", () => {
    it("Ao passar o argumento 5, deve retornar: 120", () => {
      expect(factorial(5)).toBe(120);
    });
    it("Ao passar o argumento 1, deve retornar: 1", () => {
      expect(factorial(1)).toBe(1);
    });
    it("Ao passar o argumento 2, deve retornar: 2", () => {
      expect(factorial(2)).toBe(2);
    });
  });

  describe("13 - Testando a Função fibonnaci.", () => {
    it("Ao passar o argumento 1, deve retornar: 0", () => {
      expect(fibonnaci(1)).toBe(0);
    });
    it("Ao passar o argumento 2, deve retornar: 1", () => {
      expect(fibonnaci(2)).toBe(1);
    });
    it("Ao passar o argumento 3, deve retornar: 1", () => {
      expect(fibonnaci(3)).toBe(1);
    });
    it("Ao passar o argumento 5, deve retornar: 3", () => {
      expect(fibonnaci(5)).toBe(3);
    });
    it("Ao passar o argumento 22, deve retornar: 10946", () => {
      expect(fibonnaci(22)).toBe(10946);
    });
  });

  describe("14 - Testando a Função sumPrimesNumbers.", () => {
    it("Deve retornar: 2276", () => {
      expect(sumPrimesNumbers()).toBe(2276);
    });
  });

  describe("15 - Testando as funções 'factorial15' e 'meanFactorialFromAToB'", () => {
    describe('Função factorial15', () => {
      it("Ao receber 0 como parâmetro, deve retornar 1", () => {
        const expected = 1;
        const received = factorial15(0);
        expect(received).toEqual(expected);
      });

      it("Ao receber 1 como parâmetro, deve retornar 1", () => {
        const expected = 1;
        const received = factorial15(1);
        expect(received).toEqual(expected);
      });
      it("Ao receber 2 como parâmetro, deve retornar 2", () => {
        const expected = 2;
        const received = factorial15(2);
        expect(received).toEqual(expected);
      });
      it("Ao receber 3 como parâmetro, deve retornar 6", () => {
        const expected = 6;
        const received = factorial15(3);
        expect(received).toEqual(expected);
      });
      it("Ao receber 10 como parâmetro, deve retornar 3628800", () => {
        const expected = 3628800;
        const received = factorial15(10);
        expect(received).toEqual(expected);
      });
    });

    describe('Função meanFactorialFromAToB', () => {
      it("Ao receber 0 e 0 como parâmetro, deve retornar 1", () => {
        const expected = 1;
        const received = meanFactorialFromAToB(0, 0);
        expect(received).toEqual(expected);
      });

      it("Ao receber 0 e 1 como parâmetro, deve retornar 1", () => {
        const expected = 1;
        const received = meanFactorialFromAToB(0, 1);
        expect(received).toEqual(expected);
      });

      it("Ao receber 0 e 5 como parâmetro, deve retornar 25.67", () => {
        const expected = 25.67;
        const received = meanFactorialFromAToB(0, 5);
        expect(received).toEqual(expected);
      });
      it("Ao receber 5 e 8 como parâmetro, deve retornar 11550", () => {
        const expected = 11550;
        const received = meanFactorialFromAToB(5, 8);
        expect(received).toEqual(expected);
      });
      it("Ao receber 10 e 15 como parâmetro, deve retornar 233600371200", () => {
        const expected = 233600371200;
        const received = meanFactorialFromAToB(10, 15);
        expect(received).toEqual(expected);
      });

    });
  });

  describe("16 - Testando a Função cpfValidator.", () => {
    it("Ao passar o argumento 000.000.000-00, deve retornar: 'CPF inválido'", () => {
      expect(cpfValidator("000.000.000-00")).toBe("CPF inválido");
    });
    it("Ao passar o argumento 397-606-448-34, deve retornar: 'CPF inválido'", () => {
      expect(cpfValidator("397.606.448-34")).toBe("CPF inválido");
    });
    it("Ao passar o argumento 166.354.840-43, deve retornar: 'CPF válido'", () => {
      expect(cpfValidator("166.354.840-43")).toBe("CPF válido");
    });
  });
});
