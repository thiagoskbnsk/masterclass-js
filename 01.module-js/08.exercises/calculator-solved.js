const calculator = (initialValue = 0) => {
  let baseValue = initialValue;
  let historic = [];

  const addLog = (logValue) => {
    historic.push(logValue)
    console.log(logValue);
  }

  const calc = (math, value) => {
    const types = {
      '-': baseValue - value,
      '+': baseValue + value,
      '*': baseValue * value,
      '/': baseValue / value,
    };

    const historicValue = `${baseValue} ${math} ${value} = ${types[math]}`;

    baseValue = types[math];

    addLog(historicValue)
  }

  const sum = (value) => calc('+', value);

  const sub = (value) => calc('-', value);

  const multiply = (value) => calc('*', value);

  const divide = (value) => calc('/', value);

  const reset = () => {
    baseValue = 0;

    addLog(`valor resetado: ${baseValue}`);
  }

  const listHistoric = () => {
    historic.map(value => console.log(value))
  }

  return {
    sum,
    sub,
    multiply,
    divide,
    reset,
    listHistoric
  }
}