// retornando valores
function minhaFuncao(numero1, numero2) {
  return numero1 + numero2;
}

const somaDoisNumeros = minhaFuncao(10, 20);
const somaMaisNumeros = minhaFuncao(somaDoisNumeros, 10);

console.log(somaMaisNumeros);