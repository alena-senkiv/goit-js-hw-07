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
  input: document.querySelector('#controls > input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

const boxProp = {
  size: 30,
  bgColor: () => Math.floor(Math.random() * 256),
};

refs.renderBtn.addEventListener('click', () =>
  createBoxes(Number(refs.input.value)),
);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = boxProp.size + i * 10 + 'px';
    divEl.style.height = boxProp.size + i * 10 + 'px';
    divEl.style.backgroundColor = `rgb(${boxProp.bgColor()}, ${boxProp.bgColor()}, ${boxProp.bgColor()})`;
    div.push(divEl);
  }
  refs.boxesContainer.append(...divs);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
