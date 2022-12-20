/*

11 - Loja de ração

Escreva uma algoritmo para uma loja de ração que recebe o preço de um produto e retorna as formas de pagamentos disponíveis.

Considere as seguintes premissas:
* À vista possui 10% de desconto e parcelado em 4x possui juros de 15%.

Exemplo:
-------------------------------
Entrada: 
80

Saída:
"À Vista: R$72,00 ou 4x de: R$23,00"
-------------------------------

Obs: seguir o mesmo formato de retorno da mensagem de saída.

*/

const format = (number) => (
  number.toLocaleString('en-US', { maximumFractionDigits: 2 })
);

function paymentOptions(price) {
  const oneLumpDiscount = 0.1;
  const installmentTax = 0.15;
  const installmentsNumber = 4;

  const oneLumpSumPrice = (1 - oneLumpDiscount) * price;
  const installmentTotalPrice = (1 + installmentTax) * price;
  const installmentPrice = installmentTotalPrice / installmentsNumber;

  return (
    `À Vista: R$${format(oneLumpSumPrice)} ` +
    `ou 4x de: R$${format(installmentPrice)}`
  );
};

module.exports = paymentOptions;
