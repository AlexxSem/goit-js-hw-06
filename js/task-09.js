const spanColorRef = document.querySelector('span.color');
const changeColorBtnRef = document.querySelector('button.change-color');

changeColorBtnRef.addEventListener('click', onChangeColorClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorClick() {
    spanColorRef.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
}
