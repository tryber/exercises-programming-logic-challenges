const isNameIn = require('../array03');

const nameIsIn = (name) => `O nome da ${name} está no array.`;

const notIn = 'Não faz parte';

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
    isNameIn([], 'mica');
    expect(consoleSpy).toBeCalledTimes(1);
  });
  test('should show "Não faz parte"', () => {
    isNameIn([], 'mica');
    expect(consoleSpy).toBeCalledWith(notIn);
  });
});

describe('Test Normal ', () => {
  const facilitators = ['Silvia', 'Isa', 'Marina', 'Mica', 'Amanda', 'Karine'];
  test('should return Carlos', () => {
    isNameIn(facilitators, 'Carlos');
    expect(consoleSpy).toBeCalledWith(notIn);
  });
  test('should return Mica', () => {
    isNameIn(facilitators, 'Mica');
    expect(consoleSpy).toBeCalledWith(nameIsIn('Mica'));
  });
  test('should return Silvia', () => {
    isNameIn(facilitators, 'Silvia');
    expect(consoleSpy).toBeCalledWith(nameIsIn('Silvia'));
  });
  test('should return Marina', () => {
    isNameIn(facilitators, 'Marina');
    expect(consoleSpy).toBeCalledWith(nameIsIn('Marina'));
  });
});

describe('Test Hard', () => {
  test(`should return "${notIn}" when no array is null`, () => {
    isNameIn(null, 'Marina');
    expect(consoleSpy).toBeCalledWith(notIn);
  });
  test(`should return "${notIn}" when no array is undefined`, () => {
    isNameIn(undefined, 'Marina');
    expect(consoleSpy).toBeCalledWith(notIn);
  });
});
