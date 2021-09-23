/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */
const { objetosMock : {mock4A,mock4B, mock4C }} = require('../test/mocks')
/* Gabarito */
const {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
} = require("../Desafios/Objetos/Gabaritos/1-5");

/* Exercícios */
/* const {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
 } = require("../Desafios/Objetos") */

describe("Desafios de Objetos.", () => {
  describe("01 - Testando a Função fantasyGame.", () => {
    it("Ao passar o argumento 'Mago', deve retornar a mensagem: 'Mago, 5PV.'.", () => {
      expect(fantasyGame("Mago")).toBe("Mago, 5PV.");
    });
    it("Ao passar o argumento 'Arqueiro', deve retornar a mensagem: 'Arqueiro, 10PV.'.", () => {
      expect(fantasyGame("Arqueiro")).toBe("Arqueiro, 10PV.");
    });
    it("Ao passar o argumento 'Guerreiro', deve retornar a mensagem: Guerreiro, 15PV..", () => {
      expect(fantasyGame("Guerreiro")).toBe("Guerreiro, 15PV.");
    });
    it("Ao passar o argumento 'Cavaleiro', deve retornar a mensagem: 'Cavaleiro, 20PV.'.", () => {
      expect(fantasyGame("Cavaleiro")).toBe("Cavaleiro, 20PV.");
    });
  });

  describe("02 - Testando a Função fantasyGame2", () => {
    it("Ao passar o argumento 'Mago', deve retornar a mensagem: '5PV, Varinha.'.", () => {
      expect(fantasyGame2("Mago")).toBe("5PV, Varinha.");
    });
    it("Ao passar o argumento Arqueiro, deve retornar a mensagem: '10PV, Arco Curto.'.", () => {
      expect(fantasyGame2("Arqueiro")).toBe("10PV, Arco Curto.");
    });
    it("Ao passar o argumento 'Guerreiro', deve retornar a mensagem: '15PV, Espada.'.", () => {
      expect(fantasyGame2("Guerreiro")).toBe("15PV, Espada.");
    });
    it("Ao passar o argumento 'Cavaleiro', deve retornar a mensagem: '20PV, Armadura Completa.'.", () => {
      expect(fantasyGame2("Cavaleiro")).toBe("20PV, Armadura Completa.");
    });
  });

  describe("03 - Testando a Função musicalScale.", () => {
    it("Ao passar o argumento 'Dó', deve retornar a mensagem: 'I'.", () => {
      expect(musicalScale("Dó")).toBe("I");
    });
    it("Ao passar o argumento 'Ré', deve retornar a mensagem: 'II'.", () => {
      expect(musicalScale("Ré")).toBe("II");
    });
    it("Ao passar o argumento 'Mi', deve retornar a mensagem: 'III'.", () => {
      expect(musicalScale("Mi")).toBe("III");
    });
    it("Ao passar o argumento 'Fá', deve retornar a mensagem: 'IV'.", () => {
      expect(musicalScale("Fá")).toBe("IV");
    });
    it("Ao passar o argumento 'Sol', deve retornar a mensagem: 'V'.", () => {
      expect(musicalScale("Sol")).toBe("V");
    });
    it("Ao passar o argumento 'Lá', deve retornar a mensagem: 'VI'.", () => {
      expect(musicalScale("Lá")).toBe("VI");
    });
    it("Ao passar o argumento 'Si', deve retornar a mensagem: 'VII'.", () => {
      expect(musicalScale("Si")).toBe("VII");
    });
  });

  describe("04 - Testando a Função getOldPerson.", () => {
    it(`Ao passar o argumento ${JSON.stringify(mock4A)},\n deve retornar a mensagem: 'Ramon tem a maior idade com 35 anos.'.`, () => {
      expect(getOldPerson(mock4A)).toBe("Ramon tem a maior idade com 35 anos.");
    });

    it(`Ao passar o argumento ${JSON.stringify(mock4B)},\n deve retornar a mensagem: 'José tem a maior idade com 36 anos.'.`, () => {
      expect(getOldPerson(mock4B)).toBe("José tem a maior idade com 36 anos.");
    });

    it(`Ao passar o argumento ${JSON.stringify(mock4C)},\n deve retornar a mensagem: 'Amanda tem a maior idade com 50 anos.'.`, () => {
      expect(getOldPerson(mock4C)).toBe("Amanda tem a maior idade com 50 anos.");
    });
  });

  describe("05 - Testando a Função fantasyGame3.", () => {
    it(".", () => {
      expect().toBe();
    });
  });
});
