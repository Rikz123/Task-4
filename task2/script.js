const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert')
const Prompt = document.querySelector('#prompt')
consoleLog.addEventListener('click',
    (event) => {
    alert('Метод для вывода сообщения в консоль.')
});
Alert.addEventListener('click',
    (event) => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.')
});
Prompt.addEventListener('click',
    (event) => {
    alert('Отображает диалоговое окно с запросом на ввод текста.')
});