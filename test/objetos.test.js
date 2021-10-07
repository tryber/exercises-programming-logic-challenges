/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */
const { objetosMock : {mock4A,mock4B, mock4C }} = require('../test/mocks')
/* Gabaritos */
/* const {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
} = require("../Desafios/Objetos/Gabaritos/1-5");
 */
/* Exercícios */
 const {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
 } = require("../Desafios/Objetos");

describe("Desafios de Objetos.", () => {
  describe("01 - Testando a Função fantasyGame.", () => {
    it("Ao passar o argumento 'Mago', deve retornar: 'Mago, 5PV.'", () => {
      expect(fantasyGame("Mago")).toBe("Mago, 5PV.");
    });
    it("Ao passar o argumento 'Arqueiro', deve retornar: 'Arqueiro, 10PV.'", () => {
      expect(fantasyGame("Arqueiro")).toBe("Arqueiro, 10PV.");
    });
    it("Ao passar o argumento 'Guerreiro', deve retornar: Guerreiro, 15PV..", () => {
      expect(fantasyGame("Guerreiro")).toBe("Guerreiro, 15PV.");
    });
    it("Ao passar o argumento 'Cavaleiro', deve retornar: 'Cavaleiro, 20PV.'", () => {
      expect(fantasyGame("Cavaleiro")).toBe("Cavaleiro, 20PV.");
    });
  });

  describe("02 - Testando a Função fantasyGame2", () => {
    it("Ao passar o argumento 'Mago', deve retornar: '5PV, Varinha.'", () => {
      expect(fantasyGame2("Mago")).toBe("5PV, Varinha.");
    });
    it("Ao passar o argumento Arqueiro, deve retornar: '10PV, Arco Curto.'", () => {
      expect(fantasyGame2("Arqueiro")).toBe("10PV, Arco Curto.");
    });
    it("Ao passar o argumento 'Guerreiro', deve retornar: '15PV, Espada.'", () => {
      expect(fantasyGame2("Guerreiro")).toBe("15PV, Espada.");
    });
    it("Ao passar o argumento 'Cavaleiro', deve retornar: '20PV, Armadura Completa.'", () => {
      expect(fantasyGame2("Cavaleiro")).toBe("20PV, Armadura Completa.");
    });
  });

  describe("03 - Testando a Função musicalScale.", () => {
    it("Ao passar o argumento 'Dó', deve retornar: 'I'", () => {
      expect(musicalScale("Dó")).toBe("I");
    });
    it("Ao passar o argumento 'Ré', deve retornar: 'II'", () => {
      expect(musicalScale("Ré")).toBe("II");
    });
    it("Ao passar o argumento 'Mi', deve retornar: 'III'", () => {
      expect(musicalScale("Mi")).toBe("III");
    });
    it("Ao passar o argumento 'Fá', deve retornar: 'IV'", () => {
      expect(musicalScale("Fá")).toBe("IV");
    });
    it("Ao passar o argumento 'Sol', deve retornar: 'V'", () => {
      expect(musicalScale("Sol")).toBe("V");
    });
    it("Ao passar o argumento 'Lá', deve retornar: 'VI'", () => {
      expect(musicalScale("Lá")).toBe("VI");
    });
    it("Ao passar o argumento 'Si', deve retornar: 'VII'", () => {
      expect(musicalScale("Si")).toBe("VII");
    });
  });

  describe("04 - Testando a Função getOldPerson.", () => {
    it(`Ao passar o argumento ${JSON.stringify(mock4A)}:
         deve retornar:
        'Ramon tem a maior idade com 35 anos.'`, () => {
      expect(getOldPerson(mock4A)).toBe("Ramon tem a maior idade com 35 anos.");
    });

    it(`Ao passar o argumento ${JSON.stringify(mock4B)}:
         deve retornar:
        'José tem a maior idade com 36 anos.'`, () => {
      expect(getOldPerson(mock4B)).toBe("José tem a maior idade com 36 anos.");
    });

    it(`Ao passar o argumento ${JSON.stringify(mock4C)}:
         deve retornar:
        'Amanda tem a maior idade com 50 anos.'`, () => {
      expect(getOldPerson(mock4C)).toBe("Amanda tem a maior idade com 50 anos.");
    });
  });

  describe("05 - Testando a Função fantasyGame3.", () => {
    it("Ao passar os argumentos 'Mago' e 5, deve retornar: 'Mago, nível 5: 13PV, Varinha.'", () => {
      expect(fantasyGame3("Mago", 5)).toBe("Mago, nível 5: 13PV, Varinha.");
    });
    it("Ao passar os argumentos 'Arqueiro' e 3, deve retornar: 'Arqueiro, nível 3: 16PV, Arco Curto.'", () => {
      expect(fantasyGame3("Arqueiro", 3)).toBe("Arqueiro, nível 3: 16PV, Arco Curto.");
    });
    it("Ao passar os argumentos 'Guerreiro' e 7, deve retornar: 'Guerreiro, nível 7: 39PV, Espada.'", () => {
      expect(fantasyGame3("Guerreiro", 7)).toBe("Guerreiro, nível 7: 39PV, Espada.");
    });
    it("Ao passar os argumentos 'Guerreiro' e 2 , deve retornar: 'Cavaleiro, nível 2: 25PV, Armadura Completa.'", () => {
      expect(fantasyGame3("Cavaleiro", 2)).toBe("Cavaleiro, nível 2: 25PV, Armadura Completa.");
    });
  });
});
