const input = document.querySelector('[data-input]');

const btns = Object.values(document.querySelectorAll('[data-btn]'));

const btnsMap = btns.reduce((acc, element) => {
  const name = element.getAttribute('data-btn');
  
  acc[name] = element;

  return acc;
}, {});

const calculate = () => {
  const splittedValues = input.value.split(' ').map(currentValue => {
    return Number(currentValue) || currentValue;
  });

  if (splittedValues[1] === "+") {
    input.value = splittedValues[0] + splittedValues[2];
  }
}

const clickButton = (type) => {
  if ("+-*/%".indexOf(type) >= 0) {
    input.value += ` ${type} `;

    return;
  }

  if (type === '=') {
    calculate();
    
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