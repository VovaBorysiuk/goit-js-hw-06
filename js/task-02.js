const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList = "item";
  liEl.style.listStyle = "none";
  fragment.appendChild(liEl);
}
list.appendChild(fragment);