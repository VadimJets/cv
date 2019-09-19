// создать объект
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// добавить реакцию на событие submit
myForm.addEventListener('submit', onSubmit);
// реакция на событие submit
function onSubmit(e) {
    // отключить действие по умолчанию
    e.preventDefault();
    // если поля имя или почта пустые 
    if(nameInput.value === '' || emailInput.value === '') {
        // создать сообщение со стилем error из файла стилей
        msg.classList.add('error');
        // добавить сообщение 
        msg.innerHTML = 'Please enter all fields';
        // установить задержку в 3сек.
        setTimeout(() => msg.remove(), 3000);
    } else {// иначе создать объект класса li
        const li = document.createElement('li');
        // добавить в объект li текстовое поле из связки ИМЕНИ и ПОЧТЫ
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // добавить в объект userlist объект li (засунуть в ul -> li)
        userList.appendChild(li);
        // Clear the fields обнулить переменные поля ИМЯ и ПОЧТА
        nameInput.value = '';
        emailInput.value = '';
    }    
}
let str = ('b' + 'a' + +  'a' + 'a');
console.log(str.toLowerCase());