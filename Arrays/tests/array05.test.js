const oldestSon = require('../array05');

const agesOld = (age) => `O filho mais velho tem ${age} anos`;

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log');
  consoleSpy.mockImplementation(() => 'ok');
});
afterEach(() => {
  consoleSpy = jest.restoreAllMocks();
});

describe('Test Easy ', () => {
  test('should call console.log 1 time', () => {
    oldestSon(10, [9]);
    expect(consoleSpy).toBeCalledTimes(1);
  });
  test(`should show "${agesOld(8)}"`, () => {
    oldestSon(10, [8]);
    expect(consoleSpy).toBeCalledWith(`${agesOld(8)}`);
  });
});

describe('Test Normal ', () => {
  test('should call console.log 1 time', () => {
    const kids = [4, 15, 13];
    const dad = 50;
    oldestSon(dad, kids);
    expect(consoleSpy).toBeCalledWith(`${agesOld(18)}`);
  });
  test('should call console.log 1 time', () => {
    const kids = [29, 15, 13];
    const dad = 60;
    oldestSon(dad, kids);
    expect(consoleSpy).toBeCalledWith(`${agesOld(29)}`);
  });
});
