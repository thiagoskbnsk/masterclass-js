let variavel = 0;

while (variavel < 5) {
  console.log(`Executando loop ${variavel}`);

  if (variavel === 3) {
    return;
  }

  variavel++;
}
