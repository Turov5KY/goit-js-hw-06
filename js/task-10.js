const refs = {
  input: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elementsAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    elementsAdd.push(box);
  }

  return elementsAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

refs.btnCreate.addEventListener('click', () => {
  let boxesAdd = createBoxes(refs.input.value);
  boxes.append(...boxesAdd);
  refs.input.value = '';
});

refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
  refs.input.value = '';
});
