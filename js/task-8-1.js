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
//разбиваем одну большую функцию, createBoxes, на несколько маленьких функций, старайтесь писать функции, что бы они были не более 12 строк кода
//разделяем логику и представление: отделяем работу с данными от обновления ДОМ дерева
function addBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i++) {
    divs.push(createBoxes(i));
  }
  return divs;
}
//используем шаблонные строки для краткости написания кода
function createBoxes(i) {
  const size = boxProp.size + i * 10 + 'px';
  return `<div style="background:rgb(${boxProp.bgColor()}, ${boxProp.bgColor()}, ${boxProp.bgColor()}); height:${size}; width:${size}"></div>`;
}
//используем одну функция для обновления блока #boxes
function updateBoxes(divs) {
  if (typeof divs === 'object') divs = '';
  refs.boxesContainer.innerHTML = divs;
}
//очищаем инпут после сброса
function clearInput() {
  refs.input.value = '';
}
//блок обработчиков событий
refs.destroyBtn.addEventListener('click', updateBoxes);
refs.destroyBtn.addEventListener('click', clearInput);
refs.renderBtn.addEventListener('click', () => {
  let divs = addBoxes(Number(refs.input.value));
  updateBoxes(divs.join(''));
});
