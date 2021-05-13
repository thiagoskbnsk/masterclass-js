// true = true
// false = false
// "nomeaqui" = true
// "" = false
// null = false
// undefined = false
// 0 = false
// 123 = true
// -123 = true

const nome = undefined;

if (nome) {
  console.log('tem nome')
} else {
  console.log('não tem nome');
}