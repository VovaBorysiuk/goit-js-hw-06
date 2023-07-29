const sizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

sizeControl.addEventListener('input', changeFontSize)

function changeFontSize(e) {
   text.style.fontSize = sizeControl.valueAsNumber + 'px';
}

