const refs = {
  add: document.querySelector("[data-action='increment']"),
  delete: document.querySelector("[data-action='decrement']"),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

refs.add.addEventListener('click', increment);
refs.delete.addEventListener('click', decrement);

