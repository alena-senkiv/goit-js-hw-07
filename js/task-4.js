// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const decrementBtnEl = document.querySelector(
//   '#counter > [data-action="decrement"]');
// const incrementBtnEl = document.querySelector(
//   '#counter > [data-action="increment"]');
// const counterEl = document.querySelector('#counter > span');

// через паттерн "объект ссылок"
const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector('#value'),
};

let counterValue = Number(refs.counterValueEl.textContent);
refs.decrementBtnEl.addEventListener('click', onDecrementBtnClick);
refs.incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue === 0
    ? (refs.counterValueEl.textContent = counterValue)
    : (refs.counterValueEl.textContent = counterValue -= 1);
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}
