const {
  optionsMenu,
  studentSituation,
  foundAdventurous,
  dinosaur,
  robotFriend,
  basalMetabolicRate,
  legalAge,
  foundYoungerPerson,
  reviewProjectApproval,
/*   droneDelivery, */
} = require("../Desafios/Estruturas Condicionais/Gabaritos/1-10");

const {
  triVowels,
  IMC,
  chessPoint,
  ATM,
  rockPaperScissors,
  sortAgeAsc,
  oddOreEven,
  cardGames,
} = require("../Desafios/Estruturas Condicionais/Gabaritos/11-18");

describe("Desafios de Estrutura Condicionais.", () => {
  describe(" 01 - Testando a Função optionsMenu.", () => {
    it("Verifica o retorno correto para o argumento '1'.", () => {
      expect(optionsMenu(1)).toEqual("1 - Trybe Lanche Feliz");
    });
    it("Verifica o retorno correto para o argumento '2'.", () => {
      expect(optionsMenu(2)).toEqual("2 - McTrybe");
    });
    it("Verifica o retorno correto para o argumento '3'.", () => {
      expect(optionsMenu(3)).toEqual("3 - TrybeWooper");
    });
    it("Verifica o retorno correto para o argumento '4'.", () => {
      expect(optionsMenu(4)).toEqual("4 - X-Trybe");
    });
    it("Verifica o retorno correto para o argumento '5''.", () => {
      expect(optionsMenu(5)).toEqual("5 - Triplo Trybe com JS");
    });
    it("Verifica o retorno padrão correto.", () => {
      expect(optionsMenu(6)).toEqual("Não temos esta opção ainda :(");
    });
  });

  describe(" 02 - Testando a Função studentSituation.", () => {
    it("Verifica o retorno correto para o intervalo 'menor igual a 10'.", () => {
      expect(studentSituation(10)).toEqual("PÉSSIMO");
    });
    it("Verifica o retorno correto para o intervalo 'igual ou maior que 11 e menor igual a 30'.", () => {
      expect(studentSituation(30)).toEqual("RUIM");
    });
    it("Verifica o retorno correto para o intervalo 'igual ou maior que 31 e menor igual a 50'.", () => {
      expect(studentSituation(50)).toEqual("REGULAR");
    });
    it("Verifica o retorno correto para o intervalo 'igual ou maior que 51 e menor igual a 70'.", () => {
      expect(studentSituation(70)).toEqual("MEDIANO");
    });
    it("Verifica o retorno correto para o intervalo 'igual ou maior que 71 e menor igual a 90'.", () => {
      expect(studentSituation(90)).toEqual("ÓTIMO");
    });
    it("Verifica o retorno correto para o intervalo 'maior igual a 90'.", () => {
      expect(studentSituation(91)).toEqual("EXCELENTE");
    });
  });

  describe(" 03 - Testando a Função foundAdventurous.", () => {
    it("Verifica o retorno correto para o argumento Tunico.", () => {
      expect(foundAdventurous("Tunico")).toEqual("Mestre dos Magos");
    });
    it("Verifica o retorno correto para o argumento Cremoso.", () => {
      expect(foundAdventurous("Cremoso")).toEqual("Cavaleiro Negro");
    });
    it("Verifica o retorno correto para o argumento Gordinho.", () => {
      expect(foundAdventurous("Gordinho")).toEqual("Pirata");
    });
    it("Verifica o retorno correto para o argumento Lobo Solitário.", () => {
      expect(foundAdventurous("Lobo Solitário")).toEqual("Samurai");
    });
    it("Verifica o retorno correto para o argumento Ousado.", () => {
      expect(foundAdventurous("Ousado")).toEqual("Mago");
    });
    it("Verifica o retorno correto para o argumento Anjo Loiro.", () => {
      expect(foundAdventurous("Anjo Loiro")).toEqual("Clérigo");
    });
    it("Verifica o retorno padrão correto.", () => {
      expect(foundAdventurous("Xablau")).toEqual(
        "Não foi possível encontrar um aventureiro e nome."
      );
    });
  });

  describe(" 04 - Testando a Função dinosaur dinosaur.", () => {
    it("Verifica o retorno correto para o argumento 'esquerda'.", () => {
      expect(dinosaur("esquerda")).toEqual("english");
    });
    it("Verifica o retorno correto para o argumento 'direita'.", () => {
      expect(dinosaur("direita")).toEqual("français");
    });
    it("Verifica o retorno correto para o argumento 'nenhuma''.", () => {
      expect(dinosaur("nenhuma")).toEqual("português");
    });
    it("Verifica o retorno correto para o argumento 'as duas'.", () => {
      expect(dinosaur("as duas")).toEqual("Ai eu caiu, né!!");
    });
    it("Verifica o retorno padrão correto.", () => {
      expect(dinosaur("Xablau")).toEqual("Comando desconhecido.");
    });
  });

  describe(" 05 - Testando a Função robotFriend.", () => {
    it("Verifica o retorno do comando efetuado apenas por 'mon'", () => {
      expect(robotFriend(true, false, false, false, false)).toEqual("Things I do for love...");
    });
    it("Verifica o retorno do comando efetuado apenas por 'ded'", () => {
      expect(robotFriend(false, true, false, false, false)).toEqual("Things I do for love...");
    });
    it("Verifica o retorno do comando efetuado apenas por 'me'", () => {
      expect(robotFriend(false, false, true, false, false)).toEqual("Things I do for love...");
    });
    it("Verifica o retorno do comando efetuado apenas por 'brother' ", () => {
      expect(robotFriend(false, false, false, true, false)).toEqual("Not today.");
    });
    it("Verifica o retorno do comando efetuado apenas por 'sister' ", () => {
      expect(robotFriend(false, false, false, false, true)).toEqual("Not today.");
    });
    it("Verifica o retorno do comando efetuado apenas por 'sister' e 'brother  ", () => {
      expect(robotFriend(false, false, false, true, true)).toEqual("Things I do for love...");
    });   
  });

  describe(" 06 - Testando a Função basalMetabolicRate.", () => {
    it("Verifica o retorno com o cálculo correto do BMR.", () => {
      expect(basalMetabolicRate(35, "M", 78, 175)).toEqual(
        "A taxa metabólica basal é: 1705.77 Kcal."
      );
    });
    it("Verifica o retorno com o cálculo correto do BMR.", () => {
      expect(basalMetabolicRate(18, "F", 61, 167)).toEqual(
        "A taxa metabólica basal é: 1403.58 Kcal."
      );
    });
  });

  describe(" 07 - Testando a Função legalAge.", () => {
    it("Verifica o retorno correto para menor de idade.", () => {
      expect(legalAge(17)).toEqual("A pessoa é menor de idade.");
    });
    it("Verifica o retorno para maior de idade.", () => {
      expect(legalAge(18)).toEqual("A pessoa é maior de idade.");
    });
  });

  describe(" 08- Testando a Função foundYoungerPerson.", () => {
    it("Verifica o retorno correto sendo Marina a mais velha.", () => {
      expect(foundYoungerPerson(18, 19, 20)).toEqual(
        "Marina é a mais jovem e possui 18 anos de idade."
      );
    });
    it("Verifica o retorno correto sendo Silvia a mais velha.", () => {
      expect(foundYoungerPerson(20, 18, 19)).toEqual(
        "Silvia é a mais jovem e possui 18 anos de idade."
      );
    });
    it("Verifica o retorno correto sendo Iza a mais velha.", () => {
      expect(foundYoungerPerson(20, 19, 18)).toEqual(
        "Iza é a mais jovem e possui 18 anos de idade."
      );
    });
  });

  describe(" 09- Testando a Função reviewProjectApproval.", () => {
    it("Verifica o retorno correto para aprovação sem recuperação.", () => {
      expect(
        reviewProjectApproval({
          rec: false,
          reqs: 100,
          totalReqs: 120,
          completed: 80,
        })
      ).toEqual("Parabéns, você está aprovado(a)!");
    });
    it("Verifica o retorno correto para NÃO aprovação sem recuperação.", () => {
      expect(
        reviewProjectApproval({
          rec: false,
          reqs: 100,
          totalReqs: 120,
          completed: 79,
        })
      ).toEqual("Você ainda precisa entregar mais requisitos ;)");
    });
    it("Verifica o retorno correto para aprovação em recuperação.", () => {
      expect(
        reviewProjectApproval({
          rec: true,
          reqs: 80,
          totalReqs: 100,
          completed: 90,
        })
      ).toEqual("Parabéns, você está aprovado(a)!");
    });
    it("Verifica o retorno correto para NÃO aprovação em recuperação.", () => {
      expect(
        reviewProjectApproval({
          rec: true,
          reqs: 80,
          totalReqs: 100,
          completed: 89,
        })
      ).toEqual("Você ainda precisa entregar mais requisitos ;)");
    });
  });

/*   describe.only(" 10 - Testando a Função droneDelivery.", () => {
    it("Verifica o retorno quando é possível a entrega.", () => {
      expect(droneDelivery).toEqual("É possível realizar a entrega.");
    });
    it("Verifica o retorno quando NÃO é possível a entrega.", () => {
      expect(droneDelivery).toEqual("Não é possível realizar a entrega.");
    });
  }); */

  describe(" 11 - Testando a Função triVowels.", () => {
    it("Verifica o retorno em caso de vogais.", () => {
      expect(triVowels("Daniel")).toEqual("Daaaniiieeel");
    });
    it("Verifica o retorno em caso de não existir vogais.", () => {
      expect(triVowels("JC")).toEqual("JC");
    });
  });

  describe(" 12 - Testando a Função IMC.", () => {
    it("Verifica o retorno para o caso Magreza.", () => {
      expect(IMC(50, 1.75)).toEqual(
        "Seu IMC é: 16.3 kg/m2. O Resultado foi: Magreza"
      );
    });
    it("Verifica o retorno para o caso Normal.", () => {
      expect(IMC(70, 1.75)).toEqual(
        "Seu IMC é: 22.9 kg/m2. O Resultado foi: Normal"
      );
    });
    it("Verifica o retorno para o caso Sobrepeso.", () => {
      expect(IMC(90, 1.75)).toEqual(
        "Seu IMC é: 29.4 kg/m2. O Resultado foi: Sobrepeso"
      );
    });
    it("Verifica o retorno para o caso Obesidade.", () => {
      expect(IMC(100, 1.75)).toEqual(
        "Seu IMC é: 32.7 kg/m2. O Resultado foi: Obesidade"
      );
    });
  });

  describe(" 13 - Testando a Função chessPoint.", () => {
    it("Verifica o retorno para o caso de diferença maior que 200.", () => {
      expect(chessPoint(1500, 2000)).toEqual(
        "Jogador 1: 1510 pontos; Jogador 2: 1990 pontos."
      );
    });
    it("Verifica o retorno para o caso de diferença menor do que 200.", () => {
      expect(chessPoint(1500, 1600)).toEqual(
        "Jogador 1: 1520 pontos; Jogador 2: 1580 pontos."
      );
    });
  });

  describe(" 14 - Testando a Função ATM.", () => {
    it("Verifica o retorno para argumento 'xablau' como valor de saque .", () => {
      expect(ATM(10, "xablau")).toEqual("Valor de saldo inválido");
    });
    it("Verifica o retorno para argumento 0 como valor de saque .", () => {
      expect(ATM(10, 0)).toEqual("Valor de saldo inválido");
    });
    it("Verifica o retorno em caso de saldo insuficiente.", () => {
      expect(ATM(0, 10)).toEqual("Saldo insuficiente");
    });
    it("Verifica o retorno em caso do valor não encaixa na premissa de notas de 10 e 50.", () => {
      expect(ATM(50, 32)).toEqual(
        "Valor inválido para as notas disponíveis: R$10, R$50, R$100"
      );
    });
    it("Verifica o retorno em caso de saque efetuado com sucesso.", () => {
      expect(ATM(20, 10)).toEqual("Saque efetuado! Novo saldo: R$10");
    });
  });

  describe(" 15 - Testando a Função rockPaperScissors.", () => {
    it("Verifica caso de vitória do jogador 1 com paper 'papel'.", () => {
      expect(rockPaperScissors("paper", "rock")).toEqual("Player 1 won");
    });
    it("Verifica caso de vitória do jogador 1 com rock 'pédra'.", () => {
      expect(rockPaperScissors("rock", "scissors")).toEqual("Player 1 won");
    });
    it("Verifica caso de vitória do jogador 1 com scissors 'tesoura'.", () => {
      expect(rockPaperScissors("scissors", "paper")).toEqual("Player 1 won");
    });
    it("Verifica casos de empate.", () => {
      expect(rockPaperScissors("paper", "paper")).toEqual("A Ties");
    });
    it("Verifica casos de vitória de jogador 2.", () => {
      expect(rockPaperScissors("rock", "paper")).toEqual("Player 2 won");
    });
  });

  describe(" 16 - Testando a Função sortAgeAsc.", () => {
    it("Verifica o retorno para ordem: Maria, Silvia e Iza.", () => {
      expect(sortAgeAsc(18, 19, 20)).toEqual("18, 19, 20");
    });
    it("Verifica o retorno para ordem: Iza, Maria, Silvia.", () => {
      expect(sortAgeAsc(20, 19, 18)).toEqual("18, 19, 20");
    });
    it("Verifica o retorno para ordem: Silvia, Iza, Maria.", () => {
      expect(sortAgeAsc(19, 18, 20)).toEqual("18, 19, 20");
    });
  });

  describe(" 17 - Testando a Função oddOreEven.", () => {
    it("Verifica caso de vitória com escolha par para Ana.", () => {
      expect(oddOreEven(2, 2, 0)).toEqual("Ana venceu");
    });
    it("Verifica caso de vitória com escolha par para Lúcio.", () => {
      expect(oddOreEven(2, 2, 1)).toEqual("Lúcio venceu");
    });
    it("Verifica caso de vitória com escolha ímpar para Ana.", () => {
      expect(oddOreEven(2, 1, 1)).toEqual("Ana venceu");
    });
    it("Verifica caso de vitória com escolha ímpar para Lúcio.", () => {
      expect(oddOreEven(2, 1, 0)).toEqual("Lúcio venceu");
    });
  });

  describe(" 18 - Testando a Função cardGames.", () => {
    it("Verifica caso de vitória de Mara com duas quartas iguais.", () => {
      expect(cardGames(10, 10, 5, 5)).toEqual("Mara venceu com 40 pontos");
    });
    it("Verifica caso de vitória de Mara com cartas sequências.", () => {
      expect(cardGames(10, 11, 11, 11)).toEqual("Mara venceu com 63 pontos");
    });
    it("Verifica caso de vitória de Sara com duas quartas iguais.", () => {
      expect(cardGames(5, 5, 10, 10)).toEqual("Sara venceu com 40 pontos");
    });
    it("Verifica caso de vitória de Sara com cartas sequências.", () => {
      expect(cardGames(12, 12, 11, 12)).toEqual("Sara venceu com 69 pontos");
    });
    it("Verifica caso de empate com cartas iguais.", () => {
      expect(cardGames(12, 12, 12, 12)).toEqual("O jogo empatou");
    });
    it("Verifica caso de empate com cartas sequencias.", () => {
      expect(cardGames(11, 12, 11, 12)).toEqual("O jogo empatou");
    });
  });
});
