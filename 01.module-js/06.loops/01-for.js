// for
for (let i = 0; i < 5; i++) {
  console.log(`meu i contem: ${i}`)
}

// forEach
const meuArray = [1, 2, 3];

meuArray.forEach(function (currentValue, currentIndex, total) {
  console.log(`Meu valor é: ${currentValue} e o index é: ${currentIndex}`)
});

// for in
for (index in meuArray) {
  console.log(index);
}

// for of
for (valor of meuArray) {
  console.log(valor);
}
