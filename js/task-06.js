const inputValidation = document.getElementById("validation-input");
const dataLength = Number(inputValidation.getAttribute("data-length"));

inputValidation.addEventListener("blur", checkLength)

function checkLength(e) {
    const inputLength = e.target.value.trim().length;
     if (inputLength === dataLength) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
}
