// Напиши скрипт который, при наборе текста в инпуте input #name-input(событие input),
//   подставляет его текущее значение в span #name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length > 0
    ? (refs.name.textContent = event.currentTarget.value)
    : (refs.name.textContent = 'незнакомец');
}

// refs.input.addEventListener(
//   'input',
//   () =>
//     (refs.name.textContent =
//       refs.input.value.length > 0 ? refs.input.value : 'незнакомец'),
// );
