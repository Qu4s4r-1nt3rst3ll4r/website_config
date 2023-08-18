
const btnCopyClipboard = document.querySelector('.button-copy');
const textCodeSpace = document.querySelector('.text-code-space');

btnCopyClipboard.addEventListener('click', ()=> {
    let textEnd = document.createElement('input');
    //textEnd.setAttribute("value", document.querySelector('.code-text-text').textContent);
    textEnd.value = textCodeSpace.textContent;
    navigator.clipboard.writeText(textEnd.value);
    btnCopyClipboard.style.background = '#80e100';
    textCodeSpace.style.color = '#ffffff';
})