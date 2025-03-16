const textInput = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const textForm = document.querySelector('form')
textInput.addEventListener('input', function () {
   duplicateField.textContent = textInput.value;
});
textForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = textInput.value;
    console.log(inputValue);
    textInput.value = '';
    duplicateField.textContent = '';
});
