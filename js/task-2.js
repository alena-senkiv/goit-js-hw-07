//Напиши скрипт,
// который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
//через ф-цию
const makeListItems = ingredients => {
  return ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
  });
};

const items = makeListItems(ingredients);
listEl.append(...items);

//через FOR
// const items = [];
// for (let i = 0; i < ingredients.length; i++) {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredients[i];
//   console.log(listItemEl);
//   items.push(listItemEl);
// }
// listEl.append(...items);
//
// Через map
// const items = ingredients.map(ingredient => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredient;
//   return listItemEl;
// });
// listEl.append(...items);
