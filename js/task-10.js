const inputRef = document.querySelector('#controls').firstElementChild;
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', onCreateBtnRefClick);
destroyBtnRef.addEventListener('click', onDestroyBtnClick);

function onCreateBtnRefClick() {
    const amount = inputRef.value;
    amount ? createBoxes(amount) : alert('Введите число');
    inputRef.value = '';
}

// Очищаем #boxes и сбрасываем значения width, height до стандартных
function onDestroyBtnClick() {
    boxesRef.innerHTML = '';
    inputRef.value = '';
}

// Формируем шаблонную строку для добавления в документ
function createBoxes(amount) {
    let size = 30;
    const arr = [];
    for (let i = 1; i <= amount; i += 1) {
        const color = getRandomHexColor();
        arr.push(
            `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`,
        );
        size += 10;
    }
    boxesRef.insertAdjacentHTML('beforeend', arr.join(''));
}

// Функция рандомного HEX цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
