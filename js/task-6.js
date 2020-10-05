// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length === Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add('valid')
    : event.currentTarget.classList.add('invalid');
}

function onInputFocus(event) {
  event.currentTarget.classList.remove('invalid', 'valid');
}
