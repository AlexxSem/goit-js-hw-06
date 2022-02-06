const rangeFontSizeEl = document.querySelector('#font-size-control');
const resizeText = document.querySelector('#text');

rangeFontSizeEl.addEventListener('input', onRangeChange);

function onRangeChange() {
    const fontSize = rangeFontSizeEl.value;
    resizeText.style.fontSize = `${fontSize}px`;
}

// function onRangeChange() {
//     resizeText.style.fontSize = rangeFontSizeEl.value + 'px';
// }
