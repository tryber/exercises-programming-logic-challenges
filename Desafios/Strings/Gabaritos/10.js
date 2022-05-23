function telephoneFormat(string) {
  //se não for válido retorna a própria variável
  if (!string) return string;
  //converte para string
  if (typeof string === "number") string = string.toString();
  //remove tudo que não for número
  string = string.replace(/[^0-9]/g, "");
  if (string.length < 10 || string.length > 11){
    //se tiver menos largura que 10 ou mais de 11, é inválido
    return string;
  }
  const regex = /^([0-9]{2})([0-9]?)([0-9]{4})([0-9]{4})$/gm;
  const subst = `($1) $2 $3-$4`;
  //aplica o regex de formatação e remove espaços duplicados causados
  //pela possível ausência do dígito 9 antes do número
  return string.replace(regex, subst).replace('  ',' ');
}

module.exports = telephoneFormat;
