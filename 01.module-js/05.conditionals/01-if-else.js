const numero = parseInt(Math.random() * 6) + 1;

if (numero >= 0 && numero < 2) {
  console.log('Numero entre 0 e 2');
} else if (numero >= 2 && numero < 4) {
  console.log('Numero entre 2 e 4');
} else {
  console.log('Numero acima de 4');
}

