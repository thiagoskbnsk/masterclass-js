// passando argumentos para função
function pegaUmNumeroEAcrescentaUm(numero) {
  return numero + 1;
}

console.log(pegaUmNumeroEAcrescentaUm(10));
console.log(pegaUmNumeroEAcrescentaUm(20));
console.log(pegaUmNumeroEAcrescentaUm(50));

// ####################

function minhaFuncao(
  numero = 0, 
  numero2 = 0, 
  numero3 = 0
) {
  return numero + numero2 + numero3;
}

console.log(minhaFuncao(10, 20));
console.log(minhaFuncao(20, 20, 30));
console.log(minhaFuncao(50, 10, 0));

// ####################

function minhaFuncao({ numero, numero2 }) {
  return numero + numero2;
}

const objeto = {
  numero: 20,
  numero2: 20,
  numero3: 3
}

console.log(minhaFuncao(objeto));
