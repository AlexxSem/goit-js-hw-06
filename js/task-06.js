const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    Number(input.dataset.length) === input.value.trim().length
        ? input.setAttribute('class', 'valid')
        : input.setAttribute('class', 'invalid');
}
