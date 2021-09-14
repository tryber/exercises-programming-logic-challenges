// 01 - Calcular a média
let n1 = 1
let n2 = 3
let n3 = 2

let firstResult = (n1 + n2 + n3) / 3;

console.log('O Valor médio é: ' + firstResult);


// 02 - Calcular o salário 
let salary = 1000;
let sales = 500;

let comissionPercentage = 0.04;
let comission = (sales * comissionPercentage)

let finalSalary = comission + salary;

console.log('A comissão é: ' + comission + ' e o salário final é: ' + finalSalary);


// 03 - Sucessor
let checkedNumber = 3;
let predecessor = checkedNumber - 1;
let successor = checkedNumber + 1;

console.log('O antecessor de ' + checkedNumber + ' é ' + predecessor + ' e seu sucessor é '+ successor);


// 04 - Potência de um número
let a = 2;
let z = 3;

console.log(a ** z)


// 05 - Área de um triângulo
const base = 3;
const height = 5;

let area = (base * height) / 2;

console.log('A área do triângulo de base ' + base + ' e altura ' + height + ' é: ' + area);


// 06 - Calcular IMC
let peso = 75;
let altura = 1.80;
let imc = peso / (altura * altura);


// 07 - Calcule quanto tempo de leitura
let totalPages = 208;
let readPages = 4;
let minutes = 2;
let totalMinutes = (totalPages * minutes) / readPages;

console.log('Ana levará ' + totalMinutes + ' minutos para ler o livro todo');


// 08 - Conta do restaurante
let account = 100;
let tip = account * 0.05;
let tourismTax = account * 0.1;
let finalAccount = account + tip + tourismTax;
console.log(finalAccount);


// 09 - Celsius
let celDegreeCel = 28;
let farDegreeCel = (celDegreeCel / 5) * 9 + 32;
console.log(farDegreeCel);


// 10 - Fahrenheit
let farDegreeFar = 94;
let celDegreeFar = ((5 * (farDegreeFar - 32)) / 9).toFixed(2);
console.log(celDegreeFar);
