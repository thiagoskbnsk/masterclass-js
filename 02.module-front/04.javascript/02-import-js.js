console.log('Carregou a página');

// const buttonClick = () => {
//   const button = document.querySelector('[data-button]')

//   if (button.classList.contains('btn')) {
//     button.classList.remove('btn');
//   } else {
//     button.classList.add('btn');
//   }
// }

// const remove = (self) => {
//   self.remove();
// }

// const buttonClick = () => {
//   const button = document.querySelector('[data-button]');

//   const clone = button.cloneNode(true);
//   clone.classList.add('btn');
//   clone.setAttribute('onclick', 'remove(this)');

//   const body = document.querySelector('body');

//   body.appendChild(clone);
// }

const button = document.querySelector('[data-button]')

button.addEventListener('click', buttonClick);