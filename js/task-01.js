const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsEl = document.querySelectorAll('.item');
for (const item of itemsEl) {
  const title = item.firstElementChild.textContent;

  const length = item.lastElementChild.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${length}`);
}
