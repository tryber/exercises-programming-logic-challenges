const stringMock = {
  test9:
    "Na minha vida tudo acontece Mas quanto mais a gente rala, mais a gente cresce Hoje estou feliz porque eu sonhei com você E amanhã posso chorar por não poder te ver Mas o seu sorriso vale mais que um diamante Se você vier comigo, aí nós vamos adiante Com a cabeça erguida e mantendo a fé em Deus O seu dia mais feliz vai ser o mesmo que o meu A vida me ensinou a nunca desistir Nem ganhar, nem perder mas procurar evoluir Podem me tirar tudo que tenho Só não podem me tirar as coisas boas que eu já fiz pra quem eu amo E eu sou feliz e canto e o universo é uma canção E eu vou que vou História, nossas histórias Dias de luta, dias de glória",
  resp9:
    "N5 m9nh5 v9d5 t1dp 5cpntbcb M5s q15ntp m59s 5 gbntb r5l5, m59s 5 gbntb crbscb Hpjb bstp1 fbl9z pprq1b b1 spnhb9 cpm vpcê E 5m5nhã ppssp chpr5r ppr nãp ppdbr tb vbr M5s p sb1 sprr9sp v5lb m59s q1b 1m d95m5ntb Sb vpcê v9br cpm9gp, 5í nós v5mps 5d95ntb Cpm 5 c5bbç5 brg19d5 b m5ntbndp 5 fé bm Db1s O sb1 d95 m59s fbl9z v59 sbr p mbsmp q1b p mb1 A v9d5 mb bns9np1 5 n1nc5 dbs9st9r Nbm g5nh5r, nbm pbrdbr m5s prpc1r5r bvpl19r Ppdbm mb t9r5r t1dp q1b tbnhp Só nãp ppdbm mb t9r5r 5s cp9s5s bp5s q1b b1 já f9z pr5 q1bm b1 5mp E b1 sp1 fbl9z b c5ntp b p 1n9vbrsp é 1m5 c5nçãp E b1 vp1 q1b vp1 H9stór95, npss5s h9stór95s D95s db l1t5, d95s db glór95",
};

const desafiadoresMock = {
  test4: [
      {
      degree: "II",
      third: "Menor",
      scale: "Dórica",
    },  {
      degree: "V",
      third: "Maior",
      scale: "Mixolídia",
    },
    {
      degree: "I",
      third: "Maior",
      scale: "Jônia",
    },
  ],
  test6: [
    { name: "lápis", price: 2 },
    { name: "borracha", price: 4 },
    { name: "caneta", price: 5 },
    { name: "régua", price: 6 },
    { name: "apontador", price: 3 },
    { name: "teclado gamer", price: 180 },
    { name: "mochila", price: 33 },
    { name: "fone de ouvido", price: 57 },
    { name: "mousepad", price: 35 },
  ],
   test8 : {
    liverpool: 4,
    chelsea: 1,
    arsenal: 2,
    city: 2,
  },
  result11: 
  [
    {
      degree: "II",
      triad: ["Ré", "Fá", "Lá"],
    },
    {
      degree: "V",
      triad: ["Sol", "Si", "Ré"],
    },
    {
      degree: "I",
      triad: ["Dó", "Mi", "Sol"],
    },
  ]
}

const objetosMock = {
  mock4A: [
    { name: "Ramon", age: 35 },
    { name: "José", age: 28 },
    { name: "Amanda", age: 19 },
  ],
  mock4B: [
    { name: "Ramon", age: 35 },
    { name: "José", age: 36 },
    { name: "Amanda", age: 19 },
  ],
  mock4C:[
    { name: "Ramon", age: 35 },
    { name: "José", age: 36 },
    { name: "Amanda", age: 50 },
  ]
}

module.exports = {
  stringMock,
  desafiadoresMock,
  objetosMock
};
