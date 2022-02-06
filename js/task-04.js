const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector(
    '#counter [data-action="decrement"]',
);
const incrementBtn = document.querySelector(
    '#counter [data-action="increment"]',
);

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onIncrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
