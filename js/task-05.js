const input = document.querySelector('input#name-input');
const nameLabel = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange() {
    nameLabel.textContent = input.value;
    if (input.value.trim() === '') {
        nameLabel.textContent = 'Anonymous';
    }
}

// const test = document.querySelector('input#name-input');

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
// console.dir(event.currentTarget.elements);

// const formElements = event.currentTarget.elements;

// console.dir(formElements);

// const email = formElements.email.value;
// const password = formElements.password.value;
// const subscriptions = formElements.subscription.value;

// const formData = {
//     email,
//     password,
//     subscriptions,
// };

// console.log(formData);

// const formData = new FormData(event.currentTarget);

// console.log(formData);
// }

// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     license: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputInput);

// function onInputFocus() {
//     console.log('input focus');
// }

// function onInputBlur() {
//     console.log('input blur');
// }

// function onInputChange() {
//     console.log('Input Change!');
//     refs.nameLabel.textContent = refs.input.value;
// }

// function onInputInput() {
//     refs.nameLabel.textContent = refs.input.value;
//     if (refs.input.value === '' || refs.input.value === '  ') {
//         refs.nameLabel.textContent = 'Anonymus';
//     }
// }
