const mockTest9 ="Na minha vida tudo acontece Mas quanto mais a gente rala, mais a gente cresce Hoje estou feliz porque eu sonhei com você E amanhã posso chorar por não poder te ver Mas o seu sorriso vale mais que um diamante Se você vier comigo, aí nós vamos adiante Com a cabeça erguida e mantendo a fé em Deus O seu dia mais feliz vai ser o mesmo que o meu A vida me ensinou a nunca desistir Nem ganhar, nem perder mas procurar evoluir Podem me tirar tudo que tenho Só não podem me tirar as coisas boas que eu já fiz pra quem eu amo E eu sou feliz e canto e o universo é uma canção E eu vou que vou História, nossas histórias Dias de luta, dias de glória"

const mockResp9 = "N5 m9nh5 v9d5 t1dp 5cpntbcb M5s q15ntp m59s 5 gbntb r5l5, m59s 5 gbntb crbscb Hpjb bstp1 fbl9z pprq1b b1 spnhb9 cpm vpcê E 5m5nhã ppssp chpr5r ppr nãp ppdbr tb vbr M5s p sb1 sprr9sp v5lb m59s q1b 1m d95m5ntb Sb vpcê v9br cpm9gp, 5í nós v5mps 5d95ntb Cpm 5 c5bbç5 brg19d5 b m5ntbndp 5 fé bm Db1s O sb1 d95 m59s fbl9z v59 sbr p mbsmp q1b p mb1 A v9d5 mb bns9np1 5 n1nc5 dbs9st9r Nbm g5nh5r, nbm pbrdbr m5s prpc1r5r bvpl19r Ppdbm mb t9r5r t1dp q1b tbnhp Só nãp ppdbm mb t9r5r 5s cp9s5s bp5s q1b b1 já f9z pr5 q1bm b1 5mp E b1 sp1 fbl9z b c5ntp b p 1n9vbrsp é 1m5 c5nçãp E b1 vp1 q1b vp1 H9stór95, npss5s h9stór95s D95s db l1t5, d95s db glór95"

const {
  changeNamePosition,
  convertToNumber,
  IAM,
  mathOperations,
  firstLastLetter,
  dogName,
  withA,
  findHowManyWords,
  codeMessage,
} = require("../Desafios/Strings/Gabaritos/1-9");

describe("Desafios de Strings.", () => {
  describe(" 01 - Testando a Função changeNamePosition .", () => {
    it("Verifica o correto retorno dos nomes invertidos.", () => {
      expect(changeNamePosition('Márcio Daniel')).toEqual('Daniel Márcio');
    });
  });

  describe(" 02 - Testando a Função convertToNumber.", () => {
    it(".Verifica o correto retorno da transformações de string para number.", () => {
      expect(convertToNumber('1')).toEqual(1);
    });
  });

  describe(" 03 - Testando a Função IAM.", () => {
    it("Verifica o correto retorno para apresentação.", () => {
      expect(IAM('Márcio', 'Daniel', 35)).toEqual("Meu nome é Márcio Daniel e tenho 35 anos de vida.");
    });
  });

  describe(" 04 - Testando a Função mathOperations.", () => {
    it("Verifica o retorno correto para as 4 operações básicas matemáticas.", () => {
      expect(mathOperations(1,1)).toEqual("1 + 1 = 2. 1 - 1 = 0. 1 x 1 = 1. 1 / 1 = 1.");
    });
  });

  describe(" 05 - Testando a Função firstLastLetter.", () => {
    it("Verifica o retorno correto da primeira e última letras de uma palavra.", () => {
      expect(firstLastLetter("Xablau")).toEqual("A primeira letra é: X e a ultima letra é: u");
    });
  });

  describe(" 06 - Testando a Função dogName.", () => {
    it("Verifica o correto retorno do nome do cachorrinho =)....", () => {
      expect(dogName("Chips", "pudim")).toEqual("O cachorrinho de Joana vai se chamar: Chidim");
    });
  });

  describe(" 07 - Testando a Função withA.", () => {
    it("Verifica o correto retorno para palavra que possui 'a' apenas no começo e no fim.", () => {
      expect(withA('Aninha')).toEqual("A palavra Aninha possui a letra 'a', porém ela não está nem no início nem no fim.");
    });
    it("Verifica o correto retorno para palavra que possui 'a' apenas no começo e no fim.", () => {
      expect(withA('ana')).toEqual("A palavra ana possui a letra 'a', porém ela não está nem no início nem no fim.");
    });
    it("Verifica o correto retorno para palavra que possui 'a' apenas como primeira letra.", () => {
      expect(withA('Amém')).toEqual("A palavra Amém possui a letra 'a' apenas no início.");
    });
    it("Verifica o correto retorno para palavra que possui 'a' apenas como última letra.", () => {
      expect(withA('Lua')).toEqual("A palavra Lua possui a letra 'a' apenas no fim.");
    });
    it("Verifica o correto retorno para palavra que possui não possui a letra 'a'.", () => {
      expect(withA('esquivo')).toEqual("A palavra esquivo não contém a letra 'a'.");
    });
  });

  describe(" 08 - Testando a Função findHowManyWords.", () => {
    it("Verifica o correto retorno para a palavra Abacate.", () => {
      expect(findHowManyWords("Abacate", "a")).toEqual(3);
    });
    it("Verifica o correto retorno para a frase 'Ando devagar porque já tive pressa' .", () => {
      expect(findHowManyWords("Ando de vagar porque já tive pressa", "a")).toEqual(5);
    });
  });

  describe(" 09- Testando a Função codeMessage.", () => {
    it("Verifica o correto retorno para a mensagem aeiou.", () => {
      expect(codeMessage('aeiou')).toEqual('5b9p1');
    });
    it("Verifica o correto retorno para a mensagem aleatória.", () => {
      expect(codeMessage(mockTest9)).toEqual(mockResp9);
    });
  });
});
