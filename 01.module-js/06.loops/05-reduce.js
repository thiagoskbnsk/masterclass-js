const meuArray = [10, 15, 20, 30, 50];

const total = meuArray.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const meuNovoArray = meuArray.reduce(function (accumulator, currentValue, currentIndex) {
  return [
    ...accumulator,
    {
      value: currentValue,
      index: currentIndex,
    }
  ];
}, []);

const meuObjeto = meuArray.reduce(function (accumulator, currentValue, currentIndex) {
  return {
    ...accumulator,
    values: [
      ...accumulator.values,
      {
        value: currentValue,
        index: currentIndex,
      }
    ],
    total: accumulator.total + currentValue,
  }
}, {
  values: [],
  total: 0,
});
