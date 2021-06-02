const input = document.querySelector('#value');
const inButton = document.querySelector('[data-button="in"]');
const outButton = document.querySelector('[data-button="out"]');

const tableBody = document.querySelector('#tableBody');
const totalValue = document.querySelector('#totalValue');

let total = 0;

const createRow = (type, value) => {
  const tableRow = document.createElement('tr');
  tableRow.classList.add(type === 'in' ? 'in' : 'out');

  const col1 = document.createElement('td');
  col1.innerHTML = `R$ ${value}`

  const col2 = document.createElement('td');
  col2.innerHTML = type === 'in' ? 'Entrada' : 'Saída';

  const col3 = document.createElement('td');
  col3.innerHTML = `R$ ${total}`;

  tableRow.appendChild(col1);
  tableRow.appendChild(col2);
  tableRow.appendChild(col3);

  return tableRow;
}

const sumFn = (type) => {
  const valueTyped = Number(input.value);

  if (type === 'in') {
    total += valueTyped;
  } else {
    total -= valueTyped;
  }

  input.value = "";
  totalValue.innerHTML = `R$ ${total}`;

  const row = createRow(type, valueTyped);

  tableBody.appendChild(row);
}

inButton.addEventListener('click', () => sumFn("in"));
outButton.addEventListener('click', () => sumFn("out"));