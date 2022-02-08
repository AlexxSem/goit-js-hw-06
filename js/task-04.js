const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector(
    '#counter [data-action="decrement"]',
);
const incrementBtn = document.querySelector(
    '#counter [data-action="increment"]',
);
let count = 0;
decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue.textContent = count -= 1;
}

function onIncrementBtnClick() {
    counterValue.textContent = count += 1;
}
