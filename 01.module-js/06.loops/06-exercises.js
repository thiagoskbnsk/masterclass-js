// imprima o valor do array ["1", "2", "3"]
const array = ["1", "2", "3"];
array.forEach(value => {
  console.log(value);
});

// converta o array em numero e imprima o valor ["1", "2", "3"]
const array = ["1", "2", "3"];
array.forEach(value => {
  console.log(Number(value));
});

// remova todos os números 2 do array [0, 3, 2, 1, 2, 4, 6, 2];
const array = [0, 3, 2, 1, 2, 4, 6, 2];
const novoArray = array.filter(value => value !== 2);
console.log(novoArray);

// dado o array, retorne um objeto contendo { valor: número }
const value1 = [1, 2, 3, 4, 5];
const objeto = value1.reduce((acc, value) => {
  return {
    ...acc,
    valor: value,
  }
}, {});
console.log(objeto);

// faça a soma da chave "numero" dentro do objeto
const value2 = [{ id: 0, numero: 4 }, { id: 1, numero: 9 }, { id: 2, numero: "2" }, { id: 3, numero: 8 }]
const soma = value2.reduce((acc, value) => {
  return acc += value.numero;
}, 0);
console.log(soma);

// percorra o array, se encontrar o número 50, pare. Imprima todos os números até parar usando while
const value3 = [...new Array(100)];
let i = 0;
while(i < value3.length) {
  console.log(i);

  if (i === 50) break;
}

// imprima apenas os numeros pares de 1 a 50 usando (for)
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}