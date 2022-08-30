function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');

const changeColor = () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
};

changeColorBtn.addEventListener('click', changeColor);
