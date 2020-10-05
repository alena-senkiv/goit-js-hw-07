// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//   Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listEl = document.querySelector('#categories');

const listItemsEl = listEl.children;
console.log(`В списке ${listItemsEl.length} категории`);

for (let i = 0; i < listItemsEl.length; i++) {
  const listItemTitleEl = listItemsEl[i].querySelector('h2').textContent;
  const listItemSubItemsEL = listItemsEl[i].querySelectorAll('li').length;
  console.log(`Категория: ${listItemTitleEl}`);
  console.log(`Количество элементов: ${listItemSubItemsEL}`);
}
