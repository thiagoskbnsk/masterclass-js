// retorne quantos caracteres existem na variavel
const value = 23111;

// retorne o numero de itens dentro do array
const value2 = [0, 1, 2, 3, 4];

// converta as variaveis em casas decimais
const value3 = 12;
const value4 = "R$ 23,5";

const numberWithoutMoneySymbol = value4.replace('R$ ', '');
const numberWithPoint = numberWithoutMoneySymbol.replace(',', '.');
const myValue = parseFloat(numberWithPoint);

// separe a frase por virgula
const value5 = '0, 2, 3, 4.5, 6, 7';
value5.split(',');

// encontre a palavra futebol dentro das frases
const value6 = "Eu gosto de futebol";
const value7 = "Prefiro no video game";
value6.includes('futebol');
value7.includes('futebol');

// transforme a frase em maiscula
const value8 = "wakanda forever";
value8.toUpperCase();

// transforme a frase em minuscula
const value9 = "EU sou O HOMEM FORMIGA";
value9.toLowerCase();

// altere a palavra futebol por qualquer outra
const value10 = "eu gosto de Futebol";
value10.replace('Futebol', 'video game');

// altere as palavras "três" para "dois"
const value11 = "três tigres tristes comeram três pratos de trigo";
value11.replaceAll('três', 'dois');
