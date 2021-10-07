
const { getRandomInt } = require('../test/mocks')

/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */
/* Gabaritos */
/* const {
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
} = require("../Desafios/Operadores Aritméticos/Gabaritos/21-23"); */

/* Exercícios */
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
} = require("../Desafios/Operadores Aritméticos");

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

  describe(" 15 - Testando a Função areaCircle.", () => {
    // 'A circunferência de raio R cm possui uma área de A cm quadrados'
    it("Ao receber 256 como parâmetro deve retornar 'A circunferência de raio 128 cm possui uma área de 51471.85 cm quadrados'", () => {
      const expected = 'A circunferência de raio 128 cm possui uma área de 51471.85 cm quadrados';
      const received = areaCircle(256);
      expect(received).toEqual(expected);
    });

    it("Ao receber 16 como parâmetro deve retornar 'A circunferência de raio 8 cm possui uma área de 201.06 cm quadrados'", () => {
      const expected = 'A circunferência de raio 8 cm possui uma área de 201.06 cm quadrados';
      const received = areaCircle(16);
      expect(received).toEqual(expected);
    });
  });

  describe(" 16 - Testando a Função randomBoolean.", () => {
    it("Deve retornar sempre um valor booleano de forma aleatória", () => {
      let countTrue = 0, countFalse = 0;

      for (let index = 0; index < 123; index += 1) {
        const received = randomBoolean();
        expect(typeof received).toEqual('boolean');
        received ? countTrue += 1 : countFalse += 1;
      }

      expect(countFalse).toBeGreaterThan(0);
      expect(countTrue).toBeGreaterThan(0);
    });
  });

  describe(" 17 - Testando a Função carFinancing.", () => {
    it("Deve retornar a saída correta para os parâmetros 50000, 10000, 48", () => {
      const expected = `Valor Financiado: R$40000,00;
Valor do Juros: R$2000,00;
Quantidade de Parcelas: 48;
Valor da Parcela: R$875,00;
Valor Total do Carro: R$52000,00.`;
      const received = carFinancing(50000, 10000, 48);
      expect(received).toEqual(expected);
    });
    it("Deve retornar a saída correta para os parâmetros 10000, 0, 32", () => {
      const expected = `Valor Financiado: R$10000,00;
Valor do Juros: R$500,00;
Quantidade de Parcelas: 32;
Valor da Parcela: R$328,13;
Valor Total do Carro: R$10500,00.`;
      const received = carFinancing(10000, 0, 32);
      expect(received).toEqual(expected);
    });
  });

  describe(" 18 - Testando a Função rollDice.", () => {
    it("Deve sortear valores de 1 a N sendo N o valor recebido por parâmetro", () => {
      for (let index = 0; index < 100; index += 1) {
        const d = Math.floor(Math.random() * 10) + 6; // números de 6 a 15
        const received = rollDice(d);
        expect(received).toBeGreaterThan(0);
        expect(received).toBeLessThanOrEqual(d);
      }
    });
  });

  describe(" 19 - Testando a Função carTrip.", () => {
    it("Ao receber como parâmetro 7.3, 19.9 e 15.51, deve retornar 1.78", () => {
      const received = carTrip(7.3, 19.9, 15.51);
      expect(received).toEqual(1.78);
    });

    it("Ao receber como parâmetro 7, 19 e 15, deve retornar 1.71", () => {
      const received = carTrip(7, 19, 15);
      expect(received).toEqual(1.708);
    });

    it("Ao receber como parâmetro 13, 17 e 40, deve retornar 2.92", () => {
      const received = carTrip(13, 17, 40);
      expect(received).toEqual(2.917);
    });
  });

  describe(" 20 - Testando a Função avaliador.", () => {
    it("Ao receber as notas 0, 0 e 0 deve retornar 'Reprovação, média: 0'", () => {
      const expected = 'Reprovação, média: 0';
      const received = avaliador(0, 0, 0);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 10, 10 e 10 deve retornar 'Aprovação, média: 10'", () => {
      const expected = 'Aprovação, média: 10';
      const received = avaliador(10, 10, 10);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 8, 4 e 7 deve retornar 'Aprovação, média: 6'", () => {
      const expected = 'Aprovação, média: 6';
      const received = avaliador(8, 4, 7);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 10, 6 e 0 deve retornar 'Reprovação, média: 5'", () => {
      const expected = 'Reprovação, média: 5';
      const received = avaliador(10, 6, 0);
      expect(received).toBe(expected);
    });
  });

  describe(" 21 - Testando a Função weightedAverage.", () => {
    it("Ao receber as notas 2, 5 e 10 deve retornar 'Aprovação, média: 6.1'", () => {
      const expected = 'Aprovação, média: 6.1';
      const received = weightedAverage(2, 5, 10);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 9, 8 e 2 deve retornar 'Reprovação, média: 5.9'", () => {
      const expected = 'Reprovação, média: 5.9';
      const received = weightedAverage(9, 8, 2);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 8, 9 e 3 deve retornar 'Aprovação, média: 6.3'", () => {
      const expected = 'Aprovação, média: 6.3';
      const received = weightedAverage(8, 9, 3);
      expect(received).toBe(expected);
    });

    it("Ao receber as notas 9, 2 e 6 deve retornar 'Reprovação, média: 5.7'", () => {
      const expected = 'Reprovação, média: 5.7';
      const received = weightedAverage(9, 2, 6);
      expect(received).toBe(expected);
    });
  });

  describe(" 22 - Testando a Função calculateScore.", () => {
    it("Ao receber 1 como parâmetro, deve retornar 'A pontuação da pessoa jogadora foi de 1'", () => {
      const expected = 'A pontuação da pessoa jogadora foi de 1';
      const received = calculateScore(1)
      expect(received).toEqual(expected);
    });
    it("Ao receber 5 como parâmetro, deve retornar 'A pontuação da pessoa jogadora foi de 7'", () => {
      const expected = 'A pontuação da pessoa jogadora foi de 7';
      const received = calculateScore(5)
      expect(received).toEqual(expected);
    });
    it("Ao receber 15 como parâmetro, deve retornar 'A pontuação da pessoa jogadora foi de 21'", () => {
      const expected = 'A pontuação da pessoa jogadora foi de 21';
      const received = calculateScore(15)
      expect(received).toEqual(expected);
    });
    it("Ao receber 555 como parâmetro, deve retornar 'A pontuação da pessoa jogadora foi de 555'", () => {
      const expected = 'A pontuação da pessoa jogadora foi de 777';
      const received = calculateScore(555)
      expect(received).toEqual(expected);
    });
  });

  describe(" 23 - Testando a Função successiveDivisions.", () => {
    it("Ao receber 0 como parâmetro deve retornar 'Quantidade total de divisões: 0'", () => {
      const expected = 'Quantidade total de divisões: 0';
      const received = successiveDivisions(0);
      expect(received).toEqual(expected);
    });
    it("Ao receber 1 como parâmetro deve retornar 'Quantidade total de divisões: 1'", () => {
      const expected = 'Quantidade total de divisões: 1';
      const received = successiveDivisions(1);
      expect(received).toEqual(expected);
    });
    it("Ao receber 2 como parâmetro deve retornar 'Quantidade total de divisões: 2'", () => {
      const expected = 'Quantidade total de divisões: 2';
      const received = successiveDivisions(2);
      expect(received).toEqual(expected);
    });
    it("Ao receber 512 como parâmetro deve retornar 'Quantidade total de divisões: 10'", () => {
      const expected = 'Quantidade total de divisões: 10';
      const received = successiveDivisions(512);
      expect(received).toEqual(expected);
    });
  });
});
