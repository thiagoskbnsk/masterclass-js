const meuArray = [10, 11, 12];

const meuNovoArray = meuArray.filter(function(value, index) {
  return value % 2 === 0;
});
