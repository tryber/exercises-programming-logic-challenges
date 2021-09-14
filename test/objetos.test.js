const mock4A = [
  { name: "Ramon", age: 35 },
  { name: "José", age: 28 },
  { name: "Amanda", age: 19 },
];
const mock4B = [
  { name: "Ramon", age: 35 },
  { name: "José", age: 36 },
  { name: "Amanda", age: 19 },
]
const mock4C = [
  { name: "Ramon", age: 35 },
  { name: "José", age: 36 },
  { name: "Amanda", age: 50 },
]
const {
  fantasyGame,
  fantasyGame2,
  musicalScale,
  getOldPerson,
  fantasyGame3,
} = require("../Desafios/Objetos/Gabaritos/1-5");

describe("Desafios de Objetos.", () => {
  describe(" 01 - Testando a Função fantasyGame.", () => {
    it("Verifica se o código está retornando corretamente quando passado o argumento Mago.", () => {
      expect(fantasyGame("Mago")).toEqual("Mago, 5PV.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Arqueiro.", () => {
      expect(fantasyGame("Arqueiro")).toEqual("Arqueiro, 10PV.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Guerreiro.", () => {
      expect(fantasyGame("Guerreiro")).toEqual("Guerreiro, 15PV.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Cavaleiro.", () => {
      expect(fantasyGame("Cavaleiro")).toEqual("Cavaleiro, 20PV.");
    });
  });

  describe(" 02 - Testando a Função fantasyGame2", () => {
    it("Verifica se o código está retornando corretamente quando passado o argumento Mago.", () => {
      expect(fantasyGame2("Mago")).toEqual("5PV, Varinha.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Arqueiro.", () => {
      expect(fantasyGame2("Arqueiro")).toEqual("10PV, Arco Curto.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Guerreiro.", () => {
      expect(fantasyGame2("Guerreiro")).toEqual("15PV, Espada.");
    });
    it("Verifica se o código está retornando corretamente quando passado o argumento Cavaleiro.", () => {
      expect(fantasyGame2("Cavaleiro")).toEqual("20PV, Armadura Completa.");
    });
  });

  describe(" 03 - Testando a Função musicalScale.", () => {
    it("Verifica se  código está retornando grau corretamente para o argumento Dó.", () => {
      expect(musicalScale("Dó")).toEqual("I");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Ré.", () => {
      expect(musicalScale("Ré")).toEqual("II");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Mi.", () => {
      expect(musicalScale("Mi")).toEqual("III");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Fá.", () => {
      expect(musicalScale("Fá")).toEqual("IV");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Sol.", () => {
      expect(musicalScale("Sol")).toEqual("V");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Lá.", () => {
      expect(musicalScale("Lá")).toEqual("VI");
    });
    it("Verifica se  código está retornando grau corretamente para o argumento Si.", () => {
      expect(musicalScale("Si")).toEqual("VII");
    });
  });

  describe(" 04 - Testando a Função getOldPerson.", () => {
    it("Verifica se o código está retornando corretamente a mensagem com informações da pessoa mais velha.", () => {
      expect(getOldPerson(mock4A)).toEqual("Ramon tem a maior idade com 35 anos.");
    });

    it("Verifica se o código está retornando corretamente a mensagem com informações da pessoa mais velha.", () => {
      expect(getOldPerson(mock4B)).toEqual("José tem a maior idade com 36 anos.");
    });

    it("Verifica se o código está retornando corretamente a mensagem com informações da pessoa mais velha.", () => {
      expect(getOldPerson(mock4C)).toEqual("Amanda tem a maior idade com 50 anos.");
    });
  });

  describe(" 05 - Testando a Função fantasyGame3.", () => {
    it(".", () => {
      expect().toEqual();
    });
  });
});
