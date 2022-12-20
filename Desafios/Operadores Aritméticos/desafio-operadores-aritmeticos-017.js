/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo. 

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------
Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

const toCurrency = (number) => (
  number.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: false,
  })
);

function carFinancing(carPrice, entranceValue, quota) {
  const financingTax = 0.05;
  const price = carPrice - entranceValue;
  const taxValue = price * financingTax;
  const pricePlusTax = price + taxValue;
  const parcelPrice = pricePlusTax / quota;
  const totalPrice = pricePlusTax + entranceValue;

  return (
    `Valor Financiado: R$${toCurrency(price)};\n` +
    `Valor do Juros: R$${toCurrency(taxValue)};\n` +
    `Quantidade de Parcelas: ${quota};\n` +
    `Valor da Parcela: R$${toCurrency(parcelPrice)};\n` +
    `Valor Total do Carro: R$${toCurrency(totalPrice)}.`
  )
}

module.exports = carFinancing;
