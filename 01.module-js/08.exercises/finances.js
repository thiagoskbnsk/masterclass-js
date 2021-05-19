// salario
// entradas
// saídas
// balanço

// se o que sobrar da renda total for menor que 10% imprima "Precisamos economizar", 
// se for mais que 10% e menor que 30% "estamos indo bem", 
// se for maior que 30% "Vamos começar a investir!"

const financas = (salario) => {
  let balanco = salario;

  const entrada = (valor) => {
    balanco += valor;
  }

  const saida = (valor) => {
    balanco -= valor;
  }

  const total = () => {
    const porcentagem = (balanco / salario) * 100;
    let textoFinal = 'Vamos começar a investir!';

    if (porcentagem < 10) {
      textoFinal = 'Precisamos economizar!';
    } else if (porcentagem >= 10 && porcentagem < 30) {
      textoFinal = 'Estamos indo bem!';
    }

    console.log(`${textoFinal} Porcentagem: ${porcentagem}%`)
  }

  return {
    entrada,
    saida,
    total,
  }
}

const sistema = financas(1000);

sistema.total();
sistema.saida(900);
sistema.entrada(400);
sistema.total();