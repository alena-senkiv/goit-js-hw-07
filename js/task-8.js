// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  numInput: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-action="render]'),
  destroyBtn: document.querySelector('[data-action="destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};
console.log(Number(refs.numInput.value));

refs.createBtn.addEventListener('click', createBoxes(Number(refs.numInput.value)));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let div = refs.boxesContainer.createElement('div');
  }
  console.log(amount);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
