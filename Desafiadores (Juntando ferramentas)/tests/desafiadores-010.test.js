const { reverseSign } = require('../desafiadores-010');

describe('10 - Inverte o sinal dos números', () => {
  it('Ao receber o array [2, 3, 4] como parâmetro, deve retornar o array [-2, -3, -4]',
    () => {
      const actual = reverseSign([2, 3, 4]);
      const expected = [-2, -3, -4];
      expect(actual).toStrictEqual(expected);
    });

  it('Ao receber o array [-3, -2, -1] como parâmetro, deve retornar o array [3, 2, 1]',
    () => {
      const actual = reverseSign([3, 2, 1]);
      const expected = [-3, -2, -1];
      expect(actual).toStrictEqual(expected);
    });

  it('Ao receber o array [2, 1, -3] como parâmetro, deve retornar o array [-2, -1, 3]',
    () => {
      const actual = reverseSign([2, 1, -3]);
      const expected = [-2, -1, 3];
      expect(actual).toStrictEqual(expected);
    });

  it('Ao receber o array [-1, 0, 1] como parâmetro, deve retornar o array [1, 0, -1]',
    () => {
      const actual = reverseSign([-1, 0, 1]);
      const expected = [1, 0, -1];
      expect(actual).toStrictEqual(expected);
    });
});
