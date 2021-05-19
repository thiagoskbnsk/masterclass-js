const minhaFuncao = () => {
  console.log('executou');
  
  return () => {
    console.log('segunda função');
  }
}

// #######

const somaDoisNumeros = (numero) => {
  return (numero2) => {
    return numero + numero2;
  }
}

const meuPrimeiroValor = somaDoisNumeros(100);
const meuSegundoValor = meuPrimeiroValor(50);
console.log(meuSegundoValor);

// #######

const minhaFuncao = (nome) => {
  const basquete = () => {
    console.log(`Meu nome é ${nome}, e eu gosto de jogar basquete`);
  }
  
  const futebol = () => {
    console.log(`Meu nome é ${nome}, e eu gosto de jogar futebol`);
  }
  
  return {
    basquete,
    futebol
  }
}

