const url = 'http://localhost:3000';

let currentItems = [];
const localStorageKey = 'localItemsTodo';

const getElements = () => ({
  list: document.querySelector('[data-list]'), 
  addButton: document.querySelector('[data-btn]'),
  input: document.querySelector('[data-input'), 
})

const onDelete = async (id, index) => {
  const confirm = window.confirm('Tem certeza que deseja deletar o item?');

  if (!confirm) return;

  const request = await fetch(`${url}/delete/${id}`, {
    method: 'DELETE',
  });

  if (request.status === 204) {
    currentItems.splice(index, 1);

    renderItems();
  }
}

const onCheck = async (id, isCheck, index) => {
  const request = await fetch(`${url}/check/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      check: isCheck
    })
  });

  if (request.status !== 200) {
    currentItems[index] = {
      ...currentItems[index],
      check: !isCheck,
    }

    renderItems();
  }
}

const itemList = (title, check, id, index) => `
  <li class="list-item" id="${index}">
    <label for="input-${id}" class="label-item">
      <input type="checkbox" onChange="onCheck(${id}, ${!check}, ${index})" id="input-${id}" class="checkbox" ${!!check ? 'checked' : ''} />
      <span class="title-span">${title}</span>
    </label>
    <button type="button" class="btn-delete" onClick="onDelete(${id}, ${index})">Delete</button>
  </li>
`;

const renderItems = () => {
  const { list } = getElements();
  
  const items = currentItems.reduce((acc, current, index) => {
    acc += itemList(
      current.title,
      current.check,
      current.id,
      index
    );

    return acc;
  }, "");

  localStorage.setItem(localStorageKey, JSON.stringify(currentItems));

  list.innerHTML = items;
}

const getItemsTodo = async () => {
  const localItems = localStorage.getItem(localStorageKey);

  let response = [];

  try {
    const request = await fetch(url);
  
    response = await request.json();  
  } catch (error) {
    response = JSON.parse(localItems);
  }

  currentItems = response;

  renderItems();
}

const registerItem = async () => {
  const { input } = getElements();
  const { value } = input;

  const request = await fetch(`${url}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: value
    }),
  });

  const response = await request.json();

  currentItems.push(response);

  renderItems();

  input.value = "";
}

const addActions = () => {
  const { addButton } = getElements();

  addButton.addEventListener('click', registerItem);
}

const init = () => {
  getItemsTodo();
  addActions();
};

init();