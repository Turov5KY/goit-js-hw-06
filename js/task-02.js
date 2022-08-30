const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];

  const itemsEl = document.createElement('li');
  itemsEl.textContent = `${element}`;
  itemsEl.classList.add('item');

  list.append(itemsEl);
}
