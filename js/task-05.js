const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", (event) => {
    if (outputName) {
        outputName.textContent = event.currentTarget.value;
    }
}); 
