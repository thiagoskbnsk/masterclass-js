const numero = parseInt(Math.random() * 3);

const grupo = [
  'NUMERO1',
  'NUMERO2',
  'NUMERO3'
];

const minhaString = grupo[numero];

switch(minhaString) {
  case 'NUMERO1':
    console.log('Numero 1');
    break;
  case 'NUMERO2':
    console.log('Numero 2');
    break;
  case 'NUMERO3':
    console.log('Numero 3');
    break;
  default:
    console.log('default');
}
