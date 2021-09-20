function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
}
const {
  average,
  totalReceive,
  showNeighborsNumber,
  powerNumber,
  triangleArea,
  IMC,
  readingTime,
  restaurantExpenses,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} = require("../Desafios/Operadores Aritméticos/Gabaritos/1-10");

describe("Desafios de Operadores Aritméticos.", () => {
  describe(" 01 - Testando a Função average.", () => {
    it("Verifica o retorno correto da média de 3 valores inteiros.", () => {
      expect(average(1,1,1)).toEqual("O Valor médio é: 1");
    });
    it("Verifica o retorno correto da média de 3 valores negativos.", () => {
      expect(average(-2,-5,-7)).toEqual("O Valor médio é: -4.666666666666667");
    });
    it("Verifica o retorno correto da média de 3 valores aleatórios.", () => {
      expect(average(12,50.85,-1212)).toEqual("O Valor médio é: -383.05");
    });
  });

  describe(" 02 - Testando a Função totalReceive.", () => {
    it("Verifica a mensagem correta no retorno.", () => {
      expect(totalReceive(2000, 1759)).toEqual("A comissão é: 70.36 e o ganho total é: 2070.36");
    });
  });

  describe(" 03 - Testando a Função showNeighborsNumber.", () => {
    it("Verifica o retorno da mensagem correta do número antecessor e predecessor.", () => {
      expect(showNeighborsNumber(10)).toEqual("O antecessor de 10 é 9 e seu sucessor é 11");
    });
  });

  describe(" 04 - Testando a Função powerNumber.", () => {
    const base = getRandomInt (1,100);;
    const exponent =getRandomInt (1,100);
    const result = base ** exponent;
    it("Verifica o retorno correto para base 4 potência 5.", () => {
      expect(powerNumber(4,5)).toEqual(1024);
    });
    it("Verifica o retorno correto para base e expoente aleatórios.", () => {
      expect(powerNumber(base, exponent)).toEqual(result);
    });
  });

  describe(" 05 - Testando a Função triangleArea.", () => {
    const base = getRandomInt (1,100);
    const height = getRandomInt (1,10)
    const result = (base * height) /2;
    it("Verifica o correto resulto para base 10 e altura 10.", () => {
      expect(triangleArea(10,10)).toEqual("A área do triângulo de base 10 e altura 10 é: 50");
    });
    it("Verifica o correto resulto para base e altura aleatórios.", () => {
      expect(triangleArea(base,height)).toEqual(`A área do triângulo de base ${base} e altura ${height} é: ${result}`);
    });
  });

  describe(" 06 - Testando a Função IMC.", () => {
    const height = +`1.${getRandomInt(40,99)}`
    const weight = getRandomInt(40,120);
    const imc = (height * height) / weight;
    
    it("Verifica o retorno correto para um peso de 70 kilos e uma altura de 1.8m.", () => {
      expect(IMC(70,1.8)).toEqual(0.04628571428571429);
    });
    it("Verifica o retorno correto para peso e alturas aleatórias", () => {
      expect(IMC(weight, height)).toEqual(imc);
    });
  });

  describe(" 07 - Testando a Função readingTime.", () => {
    it("Verificando o correto retorno com a mensagem informado o tempo de leitura.", () => {
      expect(readingTime(100,1,1)).toEqual("Ana levará 100 minutos para ler o livro todo");
    });
  });

  describe(" 08 - Testando a Função restaurantExpenses.", () => {
    it("Verifica o correto retorno do valor total da refeição.", () => {
      expect(restaurantExpenses(100)).toEqual(115.50);
    });
  });
  describe(" 09 - Testando a Função celsiusToFahrenheit.", () => {
    it("Verifica o correto retorno de da temperatura em Fahrenheit.", () => {
      expect(celsiusToFahrenheit(1)).toEqual(33.8);
    });
  });
  
  /* Escrito os testes até aqui */
  describe.only(" 10 - Testando a Função fahrenheitToCelsius.", () => {
    it(".", () => {
      expect(fahrenheitToCelsius(100)).toEqual(37.78);
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

  describe(" 17 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 18 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 19 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 20 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 21 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 22 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });

  describe(" 23 - Testando a Função .", () => {
    it(".", () => {
      expect().toEqual();
    });
  });
});
