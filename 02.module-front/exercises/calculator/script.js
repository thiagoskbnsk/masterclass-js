const input = document.querySelector('[data-input]');
const history = document.querySelector('[data-history]');

const btns = Object.values(document.querySelectorAll('[data-btn]'));

const btnsMap = btns.reduce((acc, element) => {
  const name = element.getAttribute('data-btn');
  
  acc[name] = element;

  return acc;
}, {});

const calculate = (percentage) => {
  const [firstNumber, symbol, secondNumber] = input.value.split(' ').map(currentValue => {
    return Number(currentValue) || currentValue;
  });

  const mapSymbols = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }

  const bValue = percentage ? (secondNumber / 100) * firstNumber : secondNumber;

  const result = mapSymbols[symbol](firstNumber, bValue);

  input.value = result;

  history.innerText = `${firstNumber} ${symbol} ${secondNumber} = ${result}`;
}

const clickButton = (type) => {
  if ("+-*/".indexOf(type) >= 0) {
    input.value += ` ${type} `;

    return;
  }

  if (type === '%' || type === '=') {
    calculate(type === '%');
    
    return;
  } 

  if (type === 'AC') {
    input.value = "";
    
    return;
  }

  input.value += type;
}

btns.map(element => {
  const name = element.getAttribute('data-btn');

  element.addEventListener('click', () => clickButton(name))
});