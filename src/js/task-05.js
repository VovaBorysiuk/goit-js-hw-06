
const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");


textInput.addEventListener('input', changeText);

function changeText(e) {
    if (e.currentTarget.value.trim() !== "") {
        textOutput.textContent = e.currentTarget.value.trim()
    }
    
    else {
        textOutput.textContent = "Anonymous"
    }
}


