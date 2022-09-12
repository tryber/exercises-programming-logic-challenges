const {
  getBandsInformation,
  getBestAlbuns,
  getBandsName,
  usaFilter,
  rockFilter,
  highestRatingFilter,
} = require("../Desafios/Destructuring e Hofs/");

describe("Desafios de Destructuring e HOFs.", () => {
  describe("01 - Testando a Função getBandsInformation.", () => {
    it("Retorne true caso o retorno da função seja um array", () => {
      expect(Array.isArray(getBandsInformation())).toBeTruthy();
    });
    it("O retorno da função deve ser o array esperado", () => {
      const expectedArray = [
        {
          bandName: 'Radiohead',
          bestAlbuns: [
            {
              name: "In Rainbows",
              rate: 100
            },
            {
              name: "Kid A",
              rate: 95
            },
            {
              name: "OK Computer",
              rate: 90
            },
            {
              name: "Pablo Honey",
              rate: 80
            }
          ],
          genre: 'Rock',
          country: 'England'
        },
        {
          bandName: 'Avenged Sevenfold',
          bestAlbuns: [
            {
              name: "City of Evil",
              rate: 99
            },
            {
              name: "Avenged Sevenfold",
              rate: 98
            },
            {
              name: "Sounding the Seventh Trumpet",
              rate: 95
            },
            {
              name: "Diamonds in the Rough",
              rate: 80
            }
          ],
          genre: 'Hard Rock',
          country: 'United States'
        }
      ]
      expect(getBandsInformation()).toEqual(expectedArray);
    });
  });

  describe("02 - Testando a Função getBestAlbuns.", () => {
    it("O retorno da função deve ser uma string", () => {
      expect(typeof getBestAlbuns()).toBe('string');
    });
    it("O retorno da função deve ser a tring esperado", () => {
      const expectedString = 'Os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey'
      expect(getBestAlbuns()).toEqual(expectedString);
    });
  });

  describe("03 - Testando a Função getBandsName.", () => {
    it("Retorne true caso o retorno da função seja um array", () => {
      expect(Array.isArray(getBandsName())).toBeTruthy();
    });
    it("O retorno da função deve ser o array esperado", () => {
      const expectedArray = [
        'Radiohead',
        'Avenged Sevenfold',
        'Arctic Monkeys',
        'Pink Floyd',
        'Foo Fighters',
        'Red Hot Chili Peppers'
      ]
      expect(getBandsName()).toEqual(expectedArray);
    });
  });

  describe("04 - Testando a Função usaFilter.", () => {
    it("O retorno da função deve ser um array", () => {
      expect(typeof usaFilter()).toBe('object');
    });
    it("O retorno da função deve ser o array esperado", () => {
      const expectedArray = [
        'Radiohead',
        'Avenged Sevenfold',
        'Arctic Monkeys',
        'Pink Floyd',
        'Foo Fighters',
        'Red Hot Chili Peppers'
      ]
      expect(usaFilter()).toEqual(expectedArray);
    });
  });

  describe("05 - Testando a Função rockFilter.", () => {
    it("O retorno da função deve ser um array", () => {
      expect(Array.isArray(rockFilter())).toBeTruthy();
    });
/*     it("O retorno da função deve ser o array esperado", () => {
      const expectedArray2 = [
        {
          bandName: 'Radiohead',
          bestAlbuns: [
            {
              name: "In Rainbows",
              rate: 100
            },
            {
              name: "Kid A",
              rate: 95
            },
            {
              name: "OK Computer",
              rate: 90
            },
            {
              name: "Pablo Honey",
              rate: 80
            }
          ],
          genre: 'Rock',
          country: 'England'
        },
        {
          bandName: 'Avenged Sevenfold',
          bestAlbuns: [
            {
              name: "City of Evil",
              rate: 99
            },
            {
              name: "Avenged Sevenfold",
              rate: 98
            },
            {
              name: "Sounding the Seventh Trumpet",
              rate: 95
            },
            {
              name: "Diamonds in the Rough",
              rate: 80
            }
          ],
          genre: 'Hard Rock',
          country: 'United States'
        },
        {
          bandName: 'Arctic Monkeys',
          bestAlbuns: [
            {
              name: "Humbug",
              rate: 100
            },
            {
              name: "AM",
              rate: 99
            },
            {
              name: "Favourite Worst Nightmare",
              rate: 95
            },
            {
              name: "Whatever People Say I Am, That's What I'm Not",
              rate: 90
            }
          ],
          genre: 'Indie Rock',
          country: 'England'
        },
        {
          bandName: 'Pink Floyd',
          bestAlbuns: [
            {
              name: "Wish You Were Here",
              rate: 100
            },
            {
              name: "Dark Side of the Moon",
              rate: 100
            },
            {
              name: "Animals",
              rate: 100
            },
            {
              name: "A Saucerful of Secrets",
              rate: 98
            }
          ],
          genre: 'Progressive Rock',
          country: 'England'
        },
        {
          bandName: 'Foo Fighters',
          bestAlbuns: [
            {
              name: "Wasting Light",
              rate: 100
            },
            {
              name: "Sonic Highways",
              rate: 90
            },
            {
              name: "Concrete and Gold",
              rate: 90
            },
            {
              name: "Echoes, Silence, Patience & Grace",
              rate: 85
            }
          ],
          genre: 'Rock',
          country: 'United States'
        },
        {
          bandName: 'Red Hot Chili Peppers',
          bestAlbuns: [
            {
              name: "Stadium Arcadium",
              rate: 100
            },
            {
              name: "Californication",
              rate: 99
            },
            {
              name: "By the Way",
              rate: 97
            },
            {
              name: "The Getaway",
              rate: 95
            }
          ],
          genre: 'Rock',
          country: 'United States'
        }
      ]
      expect(rockFilter()).toMatchObject(expectedArray2);
    }); */
  });

  describe("06 - Testando a Função highestRatingFilter.", () => {
    it("Retorne true caso o retorno da função seja um array", () => {
      expect(Array.isArray(highestRatingFilter())).toBeTruthy();
    });
    it("O retorno da função deve ser o array esperado", () => {
      const expectedArray = [
        { name: 'In Rainbows', rate: 100 },
        { name: 'Humbug', rate: 100 },
        { name: 'Wish You Were Here', rate: 100 },
        { name: 'Dark Side of the Moon', rate: 100 },
        { name: 'Animals', rate: 100 },
        { name: 'Wasting Light', rate: 100 },
        { name: 'Stadium Arcadium', rate: 100 }
      ]
      
      expect(highestRatingFilter()).toEqual(expectedArray);
    });
  });
});

