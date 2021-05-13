// se 1 for igual a 1 entao imprima "é igual", se não, imprima "não é igual";
const var1 = 1;
const var2 = 1;

if (var1 === var2) {
  console.log('é igual')
} else {
  console.log('não é igual')
}

// se 0 for false, imprima "o valor é falso";
const var1 = 0;
if (!var1) {
  console.log('o valor é falso')
}

// se for 1, imprima "Um", se for dois imprima "dois" e assim por diante até 10
const var1 = 5;
if (var1 === 1) {
  console.log("Um")
} else if (var1 === 2) {
  console.log("Dois")
} else if () { ... }

// ajude o código a não quebrar

try {
  throw new Error('Não quero quebrar');
} catch (error) {
  console.log(error);
}

// reescreva o código de forma diferente
const value1 = 0;
const value2 = value1 == false;