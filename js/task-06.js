const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length == dataLength) {
    inputEl.classList.add('valid');
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
    inputEl.classList.add('invalid');
  }
});
