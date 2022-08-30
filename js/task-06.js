const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value.length < dataLength) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
});
