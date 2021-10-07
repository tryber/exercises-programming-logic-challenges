/*
 É importada nesse arquivo tanto as funções do gabarito quanto dos desafios 
*/
/* Gabaritos */
 /* const {
  optionsMenu,
  studentSituation,
  findAdventurous,
  polyglotDinosaur,
  robotFriend,
  basalMetabolicRate,
  legalAge,
  findYoungerPerson,
  evaluateProject,
  droneDelivery, 
} = require("../Desafios/Estruturas Condicionais/Gabaritos/1-10");

const {
  triVowels,
  IMC,
  chessRating,
  ATM,
  rockPaperScissors,
  sortAgeAsc,
  oddOreEven,
  cardsGame,
} = require("../Desafios/Estruturas Condicionais/Gabaritos/11-18"); */

/* Exercícios */
 const {
  triVowels,
  IMC,
  chessRating,
  ATM,
  rockPaperScissors,
  sortAgeAsc,
  oddOreEven,
  cardsGame,
  optionsMenu,
  studentSituation,
  findAdventurous,
  polyglotDinosaur,
  robotFriend,
  basalMetabolicRate,
  legalAge,
  findYoungerPerson,
  evaluateProject,
  droneDelivery,
} = require("../Desafios/Estruturas Condicionais");

describe("Desafios de Estruturas Condicionais.", () => {
  describe("01 - Testando a Função optionsMenu.", () => {
    it("Ao passar o argumento 1, deve retornar: '1 - Trybe Lanche Feliz'", () => {
      expect(optionsMenu(1)).toBe("1 - Trybe Lanche Feliz");
    });
    it("Ao passar o argumento 2, deve retornar: '2 - McTrybe'", () => {
      expect(optionsMenu(2)).toBe("2 - McTrybe");
    });
    it("Ao passar o argumento 3, deve retornar: '3 - TrybeWooper'", () => {
      expect(optionsMenu(3)).toBe("3 - TrybeWooper");
    });
    it("Ao passar o argumento 4, deve retornar: '4 - X-Trybe'", () => {
      expect(optionsMenu(4)).toBe("4 - X-Trybe");
    });
    it("Ao passar o argumento 5, deve retornar: '5 - Triplo Trybe com JS'", () => {
      expect(optionsMenu(5)).toBe("5 - Triplo Trybe com JS");
    });
    it("Ao passar o argumento 6, deve retornar: 'Não temos esta opção ainda :('", () => {
      expect(optionsMenu(6)).toBe("Não temos esta opção ainda :(");
    });
  });

  describe("02 - Testando a Função studentSituation.", () => {
    it("Ao passar o argumento 10, deve retornar: 'PÉSSIMO'", () => {
      expect(studentSituation(10)).toBe("PÉSSIMO");
    });
    it("Ao passar o argumento 10, deve retornar: 'RUIM'", () => {
      expect(studentSituation(30)).toBe("RUIM");
    });
    it("Ao passar o argumento 50, deve retornar: 'REGULAR'", () => {
      expect(studentSituation(50)).toBe("REGULAR");
    });
    it("Ao passar o argumento 70, deve retornar: 'MEDIANO'", () => {
      expect(studentSituation(70)).toBe("MEDIANO");
    });
    it("Ao passar o argumento 90, deve retornar: 'ÓTIMO'", () => {
      expect(studentSituation(90)).toBe("ÓTIMO");
    });
    it("Ao passar o argumento 91, deve retornar: 'EXCELENTE'", () => {
      expect(studentSituation(91)).toBe("EXCELENTE");
    });
  });

  describe("03 - Testando a Função findAdventurous.", () => {
    it("Ao passar o argumento 'Tunico', deve retornar: 'Mestre dos Magos'", () => {
      expect(findAdventurous("Tunico")).toBe("Mestre dos Magos");
    });
    it("Ao passar o argumento 'Cremoso', deve retornar: 'Cavaleiro Negro'", () => {
      expect(findAdventurous("Cremoso")).toBe("Cavaleiro Negro");
    });
    it("Ao passar o argumento 'Gordinho', deve retornar: 'Pirata'", () => {
      expect(findAdventurous("Gordinho")).toBe("Pirata");
    });
    it("Ao passar o argumento 'Lobo Solitário', deve retornar: 'Samurai'", () => {
      expect(findAdventurous("Lobo Solitário")).toBe("Samurai");
    });
    it("Ao passar o argumento Ousado, deve retornar: 'Mago'", () => {
      expect(findAdventurous("Ousado")).toBe("Mago");
    });
    it("Ao passar o argumento 'Anjo Loiro', deve retornar: 'Clérigo'", () => {
      expect(findAdventurous("Anjo Loiro")).toBe("Clérigo");
    });
    it("Ao passar um argumento incorreto, deve retornar: 'Aventureiro não encontrado'", () => {
      expect(findAdventurous("Xablau")).toBe(
        "Aventureiro não encontrado"
      );
    });
  });

  describe("04 - Testando a Função polyglotDinosaur.", () => {
    it("Ao passar o argumento 'esquerda', deve retornar: 'english'", () => {
      expect(polyglotDinosaur("esquerda")).toBe("english");
    });
    it("Ao passar o argumento 'direita', deve retornar: 'français'", () => {
      expect(polyglotDinosaur("direita")).toBe("français");
    });
    it("Ao passar o argumento 'nenhuma', deve retornar: 'português'", () => {
      expect(polyglotDinosaur("nenhuma")).toBe("português");
    });
    it("Ao passar o argumento 'as duas', deve retornar: 'Ai eu caiu, né!!'", () => {
      expect(polyglotDinosaur("as duas")).toBe("Ai eu caiu, né!!");
    });
    it("Ao passar o argumento 'Xablau', deve retornar: 'Comando desconhecido'", () => {
      expect(polyglotDinosaur("Xablau")).toBe("Comando desconhecido.");
    });
  });

  describe("05 - Testando a Função robotFriend.", () => {
    it(`Ao passar os argumento true, false, false, false, false, deve retornar: 
         'Things I do for love...'.`, () => {
      expect(robotFriend(true, false, false, false, false)).toBe(
        "Things I do for love..."
      );
    });
    it(`Ao passar os argumentos false, true, false, false, false, deve retornar: 
         'Things I do for love...'.`, () => {
      expect(robotFriend(false, true, false, false, false)).toBe(
        "Things I do for love..."
      );
    });
    it(`Ao passar os argumentos false, false, true, false, false, deve retornar: 
         'Things I do for love...'.`, () => {
      expect(robotFriend(false, false, true, false, false)).toBe(
        "Things I do for love..."
      );
    });
    it(`Ao passar od argumentos false, false, false, true, false, deve retornar: 
         'Not today.'.`, () => {
      expect(robotFriend(false, false, false, true, false)).toBe("Not today.");
    });
    it(`Ao passar os argumentos false, false, false, false, true, deve retornar: 
         'Not today.'.`, () => {
      expect(robotFriend(false, false, false, false, true)).toBe("Not today.");
    });
    it(`Ao passar os argumentos false, false, false, true, true, deve retornar: 
         'Things I do for love...'.`, () => {
      expect(robotFriend(false, false, false, true, true)).toBe(
        "Things I do for love..."
      );
    });
  });

  describe("06 - Testando a Função basalMetabolicRate.", () => {
    it(`Ao passar os argumentos 35, 'M', 78, 175, deve retornar: 
         'A taxa metabólica basal é: 1705.77 Kcal'.`, () => {
      expect(basalMetabolicRate(35, "M", 78, 175)).toBe(
        "A taxa metabólica basal é: 1705.77 Kcal."
      );
    });
    it(`Ao passar os argumentos 18, 'F', 61, 167, deve retornar: 
         'A taxa metabólica basal é: 1403.58 Kcal.'.`, () => {
      expect(basalMetabolicRate(18, "F", 61, 167)).toBe(
        "A taxa metabólica basal é: 1403.58 Kcal."
      );
    });
  });

  describe("07 - Testando a Função legalAge.", () => {
    it("Ao passar o argumento 17, deve retornar: 'A pessoa é menor de idade'", () => {
      expect(legalAge(17)).toBe("A pessoa é menor de idade.");
    });
    it("Ao passar o argumento 18, deve retornar: 'A pessoa é maior de idade'", () => {
      expect(legalAge(18)).toBe("A pessoa é maior de idade.");
    });
  });

  describe("08 - Testando a Função findYoungerPerson", () => {
    it(`Ao passar os argumentos 18, 19, 20, deve retornar: 
         'Marina é a mais jovem e possui 18 anos de idade'.`, () => {
      expect(findYoungerPerson(18, 19, 20)).toBe(
        "Marina é a mais jovem e possui 18 anos de idade."
      );
    });
    it(`Ao passar os argumentos 20, 18, 19, deve retornar: 
         'Silvia é a mais jovem e possui 18 anos de idade.'.`, () => {
      expect(findYoungerPerson(20, 18, 19)).toBe(
        "Silvia é a mais jovem e possui 18 anos de idade."
      );
    });
    it(`Ao passar os argumentos 20, 19, 18, deve retornar: 
        'Iza é a mais jovem e possui 18 anos de idade'.`, () => {
      expect(findYoungerPerson(20, 19, 18)).toBe(
        "Iza é a mais jovem e possui 18 anos de idade."
      );
    });
  });

  describe("09- Testando a Função evaluateProject.", () => {
    it(`Ao passar o argumento {
      rec: false,
      reqs: 100,
      totalReqs: 120,
      completed: 80,
    }, 
    deve retornar: 'Parabéns, você está aprovado(a)!'.`, () => {
      expect(
        evaluateProject({
          rec: false,
          reqs: 100,
          totalReqs: 120,
          completed: 80,
        })
      ).toBe("Parabéns, você está aprovado(a)!");
    });
    it(`Ao passar o argumento {
      rec: false,
      reqs: 100,
      totalReqs: 120,
      completed: 79,
    }, deve retornar: 'Você ainda precisa entregar mais requisitos ;)'.`, () => {
      expect(
        evaluateProject({
          rec: false,
          reqs: 100,
          totalReqs: 120,
          completed: 79,
        })
      ).toBe("Você ainda precisa entregar mais requisitos ;)");
    });
    it(`Ao passar o argumento {
      rec: true,
      reqs: 80,
      totalReqs: 100,
      completed: 90,
    }, deve retornar: 'Parabéns, você está aprovado(a)!'.`, () => {
      expect(
        evaluateProject({
          rec: true,
          reqs: 80,
          totalReqs: 100,
          completed: 90,
        })
      ).toBe("Parabéns, você está aprovado(a)!");
    });
    it(`Ao passar o argumento {
      rec: true,
      reqs: 80,
      totalReqs: 100,
      completed: 89,
    }, deve retornar: 'Você ainda precisa entregar mais requisitos ;)'.`, () => {
      expect(
        evaluateProject({
          rec: true,
          reqs: 80,
          totalReqs: 100,
          completed: 89,
        })
      ).toBe("Você ainda precisa entregar mais requisitos ;)");
    });
  });

  /*   describe.only(" 10 - Testando a Função droneDelivery.", () => {
    it("Verifica o retorno quando é possível a entrega.", () => {
      expect(droneDelivery).toBe("É possível realizar a entrega.");
    });
    it("Verifica o retorno quando NÃO é possível a entrega.", () => {
      expect(droneDelivery).toBe("Não é possível realizar a entrega.");
    });
  }); */

  describe("09- Testando a Função triVowels.", () => {
    it("Ao passar o argumento Daniel, deve retornar: 'Daaaniiieeel'", () => {
      expect(triVowels("Daniel")).toBe("Daaaniiieeel");
    });
    it("Ao passar o argumento JC, deve retornar: 'JC'", () => {
      expect(triVowels("JC")).toBe("JC");
    });
  });

  describe(" 12 - Testando a Função IMC.", () => {
    it(`Ao passar os argumentos 50, 1.75, deve retornar: 
         'Seu IMC é: 16.3 kg/m2. O Resultado foi: Magreza'.`, () => {
      expect(IMC(50, 1.75)).toBe(
        "Seu IMC é: 16.3 kg/m2. O Resultado foi: Magreza"
      );
    });
    it(`Ao passar os argumentos 70, 1.75, deve retornar: 
         'Seu IMC é: 22.9 kg/m2. O Resultado foi: Normal'.`, () => {
      expect(IMC(70, 1.75)).toBe(
        "Seu IMC é: 22.9 kg/m2. O Resultado foi: Normal"
      );
    });
    it(`Ao passar o argumento 90, 1.75, deve retornar: 
         'Seu IMC é: 29.4 kg/m2. O Resultado foi: Sobrepeso'.`, () => {
      expect(IMC(90, 1.75)).toBe(
        "Seu IMC é: 29.4 kg/m2. O Resultado foi: Sobrepeso"
      );
    });
    it(`Ao passar o argumento 100, 1.75, deve retornar: 
         'Seu IMC é: 32.7 kg/m2. O Resultado foi: Obesidade'.`, () => {
      expect(IMC(100, 1.75)).toBe(
        "Seu IMC é: 32.7 kg/m2. O Resultado foi: Obesidade"
      );
    });
  });

  describe(" 13 - Testando a Função chessRating.", () => {
    it(`Ao passar os argumentos 1500 e 2000, deve retornar: 
         'Enxadrista1: 1510 pontos. Enxadrista2: 1990 pontos.'.`, () => {
      expect(chessRating(1500, 2000)).toBe(
        "Enxadrista1: 1510 pontos. Enxadrista2: 1990 pontos."
      );
    });
    it(`Ao passar os argumentos 1500, 1600, deve retornar: 
         'Enxadrista1: 1520 pontos. Enxadrista2: 1580 pontos.'.`, () => {
      expect(chessRating(1500, 1600)).toBe(
        "Enxadrista1: 1520 pontos. Enxadrista2: 1580 pontos."
      );
    });
  });

  describe(" 14 - Testando a Função ATM.", () => {
    it("Ao passar os argumento 10 e xablau, deve retornar: 'Valor de saldo inválido'", () => {
      expect(ATM(10, "xablau")).toBe("Valor de saldo inválido");
    });
    it("Ao passar os argumentos 10 e 0, deve retornar: 'Valor de saldo inválido'", () => {
      expect(ATM(10, 0)).toBe("Valor de saldo inválido");
    });
    it("Ao passar os argumentos 0, 10, deve retornar: 'Saldo insuficiente'", () => {
      expect(ATM(0, 10)).toBe("Saldo insuficiente");
    });
    it(`Ao passar os argumentos 50, 32, deve retornar: 
         'Valor inválido para as notas disponíveis: R$10, R$50, R$100'`, () => {
      expect(ATM(50, 32)).toBe(
        "Valor inválido para as notas disponíveis: R$10, R$50, R$100"
      );
    });
    it("Ao passar os argumentos 20, 10 , deve retornar: 'Saque efetuado! Novo saldo: R$10'", () => {
      expect(ATM(20, 10)).toBe("Saque efetuado! Novo saldo: R$10");
    });
  });

  describe(" 15 - Testando a Função rockPaperScissors.", () => {
    it("Ao passar os argumentos 'paper' e 'rock', deve retornar: 'Player 1 won'", () => {
      expect(rockPaperScissors("paper", "rock")).toBe("Player 1 won");
    });
    it("Ao passar os argumentos 'rock' e 'scissors', deve retornar: 'Player 1 won'", () => {
      expect(rockPaperScissors("rock", "scissors")).toBe("Player 1 won");
    });
    it("Ao passar os argumentos 'scissors' e 'paper', deve retornar: 'Player 1 won'", () => {
      expect(rockPaperScissors("scissors", "paper")).toBe("Player 1 won");
    });
    it("Ao passar os argumentos 'paper' e 'paper', deve retornar: 'A Ties'", () => {
      expect(rockPaperScissors('paper', 'paper')).toBe("A Ties");
    });
    it("Ao passar os argumentos 'rock', 'paper', deve retornar: 'Player 2 won'", () => {
      expect(rockPaperScissors("rock", "paper")).toBe("Player 2 won");
    });
  });

  describe(" 16 - Testando a Função sortAgeAsc.", () => {
    it("Ao passar os argumentos 18, 19 e 20 , deve retornar: '18, 19, 20'", () => {
      expect(sortAgeAsc(18, 19, 20)).toBe("18, 19, 20");
    });
    it("Ao passar os argumentos 20, 19, 18, deve retornar: '18, 19, 20'", () => {
      expect(sortAgeAsc(20, 19, 18)).toBe("18, 19, 20");
    });
    it("Ao passar o argumento 19, 18, 20, deve retornar: '18, 19, 20'", () => {
      expect(sortAgeAsc(19, 18, 20)).toBe("18, 19, 20");
    });
  });

  describe(" 17 - Testando a Função oddOreEven.", () => {
    it("Ao passar os argumentos 2, 2, 0, deve retornar: 'Ana venceu'", () => {
      expect(oddOreEven(2, 2, 0)).toBe("Ana venceu");
    });
    it("Ao passar os argumentos 2, 2, 1, deve retornar: 'Lúcio venceu'", () => {
      expect(oddOreEven(2, 2, 1)).toBe("Lúcio venceu");
    });
    it("Ao passar os argumentos 2, 1, 1, deve retornar: 'Ana venceu'", () => {
      expect(oddOreEven(2, 1, 1)).toBe("Ana venceu");
    });
    it("Ao passar os argumentos 2, 1, 0, deve retornar: 'Lúcio venceu'", () => {
      expect(oddOreEven(2, 1, 0)).toBe("Lúcio venceu");
    });
  });

  describe(" 18 - Testando a Função cardsGame.", () => {
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'Mara venceu com 40 pontos'", () => {
      expect(cardsGame(10, 10, 5, 5)).toBe("Mara venceu com 40 pontos");
    });
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'Mara venceu com 63 pontos'", () => {
      expect(cardsGame(10, 11, 11, 11)).toBe("Mara venceu com 63 pontos");
    });
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'Sara venceu com 40 pontos'", () => {
      expect(cardsGame(5, 5, 10, 10)).toBe("Sara venceu com 40 pontos");
    });
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'Sara venceu com 69 pontos'", () => {
      expect(cardsGame(12, 12, 11, 12)).toBe("Sara venceu com 69 pontos");
    });
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'O jogo empatou'", () => {
      expect(cardsGame(12, 12, 12, 12)).toBe("O jogo empatou");
    });
    it("Ao passar os argumentos 10, 10, 5, 5, deve retornar: 'O jogo empatou'", () => {
      expect(cardsGame(11, 12, 11, 12)).toBe("O jogo empatou");
    });
  });
});
