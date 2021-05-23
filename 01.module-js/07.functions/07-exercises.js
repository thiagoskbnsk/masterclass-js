// escreva uma função que retorna uma string
const minhaFuncao = () => 'Thiago';

// escreva uma função que retorna a soma de dois numeros
const soma = () => 1 + 1;

// escreva uma função que recebe dois numeros como parametro e retorna a soma desses valores
const soma = (num1, num2) => num1 + num2;

// escreva uma função que recebe um numero do tipo string como parametro e soma + 1
const soma = (string1) => parseInt(string1) + 2;

// escreva uma função que recebe uma string como parametro e retorna um array com todas as letras separadas
const returnArray = (string1) => string1.split('');

// escreva uma função que recebe uma frase e retorna ela toda em maisculo
const uppercase = (string1) => string1.toUpperCase();

// escreva uma função que recebe um numero como parametro e retorna outra função que recebe um numero como parametro. O retorno da segunda função deve ser a soma dos dois
const sum1 = (num1) => (num2) => num1 + num2;

// escreva uma função que recebe uma frase (string) e retorna "Futebol encontrado" se foi encontrado a palavra "futebol" dentro dela ou "Futebol não encontrado"
const hasFutebol = (string1) => {
  const sentence = string1.toUpperCase();
  
  if (sentence.includes('FUTEBOL')) {
    console.log('Futebol encontrado!');

    return;
  }

  console.log('Futebol não encontrado!');
}