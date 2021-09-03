const canDriveOrNot = require('../desafiadores-01');
// 01 - Idade mínima da CNH
// Escreva uma função que recebe o nome e ano de nascimento de uma pessoa e retorne a frase:
// "(nome_da_pessoa) tem (idade) anos de idade e (pode ou não pode) iniciar o processo
// para obter CNH."

// // Desenvolva seu código aqui.

const year = new Date().getFullYear();
const canDrive = (nome, idade) =>
  `${nome} tem ${
    year - idade
  } anos de idade e pode iniciar o processo para obter CNH.`;

const cantDrive = (nome, idade) =>
  `${nome} tem ${
    year - idade
  } anos de idade e não pode iniciar o processo para obter CNH.`;

describe('Test Easy ', () => {
  test('should return "Alberto tem 35 anos de idade e pode iniciar o processo para obter CNH."', () => {
    const personName = 'Alberto';
    const birthYear = 1986;
    expect(canDriveOrNot(personName, birthYear)).toBe(
      canDrive(personName, birthYear),
    );
  });
});

describe('Test Normal ', () => {
  test('should return "Alberto tem 33 anos de idade e pode iniciar o processo para obter CNH."', () => {
    const personName = 'Carla';
    const birthYear = 1988;
    expect(canDriveOrNot(personName, birthYear)).toBe(
      canDrive(personName, birthYear),
    );
  });

  test('should return "Renatinha tem 9 anos de idade e pode iniciar o processo para obter CNH."', () => {
    const personName = 'Renatinha';
    const birthYear = 2012;
    expect(canDriveOrNot(personName, birthYear)).toBe(
      cantDrive(personName, birthYear),
    );
  });
});
