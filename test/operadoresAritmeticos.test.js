
const { getRandomInt } = require('../test/mocks')

/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */
/* Gabaritos */
const {
  average,
  totalReceive,
  showNeighbors,
  powerNumber,
  triangleArea,
  IMC,
  readingTime,
  restaurantExpenses,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} = require("../Desafios/Operadores Aritméticos/Gabaritos/1-10");
const {
  paymentOptions,
  weightAndValue,
  randomRGBColor,
  timeTravel,
  areaCircle,
  randomBoolean,
  carFinancing,
  rollDice,
  carTrip,
  avaliador,
} = require("../Desafios/Operadores Aritméticos/Gabaritos/11-20")

const {
  weightedAverage,
  calculateScore,
  successiveDivisions,
} = require("../Desafios/Operadores Aritméticos/Gabaritos/21-23");

/* Exercícios */
/* 
const {
  average,
  totalReceive,
  showNeighbors,
  powerNumber,
  triangleArea,
  IMC,
  readingTime,
  restaurantExpenses,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  paymentOptions,
  weightAndValue,
  randomRGBColor,
  timeTravel,
  areaCircle,
  randomBoolean,
  carFinancing,
  rollDice,
  carTrip,
  avaliador,
  weightedAverage,
  calculateScore,
  successiveDivisions,
} = require("../Desafios/Operadores Aritméticos")
 */
describe("Desafios de Operadores Aritméticos.", () => {
  describe(" 01 - Testando a Função average.", () => {
    it(`Ao passar os argumentos -2,-5 e -7, deve retornar:
         'O Valor médio é: -4.666666666666667'`, () => {
      expect(average(-2, -5, -7)).toBe("O Valor médio é: -4.666666666666667");
    });
    it(`Ao passar os argumentos 12,50.85 e -1212, deve retornar:
         'O Valor médio é: -383.05'`, () => {
      expect(average(12, 50.85, -1212)).toBe("O Valor médio é: -383.05");
    });
  });

  describe(" 02 - Testando a Função totalReceive.", () => {
    it(`Ao passar os argumentos 2000 e 1759, deve retornar:
         'A comissão é: 70.36 e o ganho total é: 2070.36'`, () => {
      expect(totalReceive(2000, 1759)).toBe("A comissão é: 70.36 e o ganho total é: 2070.36");
    });
  });

  describe(" 03 - Testando a Função showNeighbors.", () => {
    it(`Ao passar o argumento 10, deve retornar:
         'O antecessor de 10 é 9 e seu sucessor é 11'`, () => {
      expect(showNeighbors(10)).toBe("O antecessor de 10 é 9 e seu sucessor é 11");
    });
  });

  describe(" 04 - Testando a Função powerNumber.", () => {
    const base = getRandomInt(1, 20);;
    const exponent = getRandomInt(1, 10);
    const result = base ** exponent;
    it("Ao passar os argumentos 4 e 5, deve retornar: 1024", () => {
      expect(powerNumber(4, 5)).toBe(1024);
    });
    it(`Ao passar os argumentos ${base} e ${exponent}, deve retornar: ${result}`, () => {
      expect(powerNumber(base, exponent)).toBe(result);
    });
  });

  describe(" 05 - Testando a Função triangleArea.", () => {
    const base = getRandomInt(1, 10);
    const height = getRandomInt(1, 5)
    const result = (base * height) / 2;
    it(`Ao passar o argumento 10 e 10, deve retornar:
         'A área do triângulo de base 10 e altura 10 é: 50'`, () => {
      expect(triangleArea(10, 10)).toBe("A área do triângulo de base 10 e altura 10 é: 50");
    });
    it(`Ao passar o argumento ${base} e ${height}, deve retornar:
          A área do triângulo de base ${base} e altura ${height} é: ${result}`, () => {
      expect(triangleArea(base, height)).toBe(`A área do triângulo de base ${base} e altura ${height} é: ${result}`);
    });
  });

  describe(" 06 - Testando a Função IMC.", () => {
    const height = +`1.${getRandomInt(40, 99)}`
    const weight = getRandomInt(40, 120);
    const imc = (height * height) / weight;
    it("Ao passar os argumentos 70 e 1.8 , deve retornar: 0.04628571428571429", () => {
      expect(IMC(70, 1.8)).toBe(0.04628571428571429);
    });
    it(`Ao passar os argumentos ${weight} e ${height}, deve retornar: ${imc}`, () => {
      expect(IMC(weight, height)).toBe(imc);
    });
  });

  describe(" 07 - Testando a Função readingTime.", () => {
    it(`Ao passar os argumentos 100, 1 e 1, deve retornar:
         'Ana levará 100 minutos para ler o livro todo'`, () => {
      expect(readingTime(100, 1, 1)).toBe("Ana levará 100 minutos para ler o livro todo");
    });
  });

  describe(" 08 - Testando a Função restaurantExpenses.", () => {
    it("Ao passar o argumento 100, deve retornar: 115.50", () => {
      expect(restaurantExpenses(100)).toBe(115.50);
    });
  });
  describe(" 09 - Testando a Função celsiusToFahrenheit.", () => {
    it("Ao passar o argumento 1, deve retornar: 33.8", () => {
      expect(celsiusToFahrenheit(1)).toBe(33.8);
    });
  });

  describe(" 10 - Testando a Função fahrenheitToCelsius.", () => {
    it("Ao passar o argumento 100, deve retornar: 37.78", () => {
      expect(fahrenheitToCelsius(100)).toBe(37.78);
    });
    it("Ao passar o argumento 32, deve retornar: 0", () => {
      expect(fahrenheitToCelsius(32)).toBe(0);
    });
    it("Ao passar o argumento 0, deve retornar: -17.78", () => {
      expect(fahrenheitToCelsius(0)).toBe(-17.78);
    });
  });


  describe(" 11 - Testando a Função paymentOptions.", () => {
    it("Se o preço do produto for 10, deve retornar 'À Vista: R$9 ou 4x de: R$2.88'", () => {
      const expected = 'À Vista: R$9 ou 4x de: R$2.88';
      expect(paymentOptions(10))
        .toBe(expected);
    });
    it("Se o preço for 80, deve retornar 'À Vista: R$72 ou 4x de: R$23'", () => {
      const expected = 'À Vista: R$72 ou 4x de: R$23';
      expect(paymentOptions(80))
        .toBe(expected);
    });
  });

  describe(" 12 - Testando a Função weightAndValue.", () => {

    it("Com o preço do kg sendo 37,90 reais e o peso sem 735 gramas, deve retornar 'O prato de 735 gramas custa: R$ 27,86'", () => {
      const expected = 'O prato de 735 gramas custa: R$ 27,86';
      const received = weightAndValue(37.90, 735)
      expect(received).toEqual(expected);
    });

    it("Com o preço do kg sendo 30 reais e o peso sem 1000 gramas, deve retornar 'O prato de 1000 gramas custa: R$ 30,00'", () => {
      const expected = 'O prato de 1000 gramas custa: R$ 30,00';
      const received = weightAndValue(30, 1000)
      expect(received).toEqual(expected);
    });

    it("Com o preço do kg sendo 49,90 reais e o peso sem 1234 gramas, deve retornar 'O prato de 1234 gramas custa: R$ 61,58'", () => {
      const expected = 'O prato de 1234 gramas custa: R$ 61,58';
      const received = weightAndValue(49.9, 1234)
      expect(received).toEqual(expected);
    });
  });

  describe(" 13 - Testando a Função randomRGBColor.", () => {
    // rgb(x, y, z)
    it(`Deve retornar uma string no formato 'rgb(x, y, z)', sendo x, y e z números inteiros`, () => {
      const received = randomRGBColor();
      expect(received).toMatch(/rgb\(\d+, \d+, \d+\)/);
    });

    it("Deve gerar valores maiores ou iguais a 0 e menores que 256", () => {
      const received = randomRGBColor();
      const values = received.replace(/[^\d,]/g, '').split(',');
      Array(...values).map((v) => parseFloat(v)).forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(256);
      })
    });
  });

  describe(" 14 - Testando a Função timeTravel.", () => {
    // A viagem terá duração de x hora(s) e y minuto(s)
    it("Ao receber 60 como parâmetro, deve retornar 'A viagem terá duração de 1 hora(s) e 0 minuto(s)'", () => {
      const expected = 'A viagem terá duração de 1 hora(s) e 0 minuto(s)';
      const received = timeTravel(60);
      expect(received).toEqual(expected);
    });

    it("Ao receber 73 como parâmetro, deve retornar 'A viagem terá duração de 1 hora(s) e 13 minuto(s)'", () => {
      const expected = 'A viagem terá duração de 1 hora(s) e 13 minuto(s)';
      const received = timeTravel(73);
      expect(received).toEqual(expected);
    });

    it("Ao receber 1734 como parâmetro, deve retornar 'A viagem terá duração de 28 hora(s) e 54 minuto(s)'", () => {
      const expected = 'A viagem terá duração de 28 hora(s) e 54 minuto(s)';
      const received = timeTravel(1734);
      expect(received).toEqual(expected);
    });
  });

  /* Escrito os testes até aqui 
    describe(" 15 - Testando a Função areaCircle.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 16 - Testando a Função randomBoolean.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 17 - Testando a Função carFinancing.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 18 - Testando a Função rollDice.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 19 - Testando a Função carTrip.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 20 - Testando a Função avaliador.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 21 - Testando a Função weightedAverage.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 22 - Testando a Função weightedAverage.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });
  
    describe(" 23 - Testando a Função successiveDivisions.", () => {
      it(".", () => {
        expect().toEqual();
      });
    });  */
});
