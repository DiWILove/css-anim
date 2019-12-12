
const nameInput = document.getElementById('name');

const nameValue = localStorage.getItem('Name');
nameInput.value = nameValue;

// nameInput.oninput = function () {
//     localStorage.setItem('Name', this.value);
// }


const mailInput = document.getElementById('mail');

const mailValue = localStorage.getItem('Email');
mailInput.value = mailValue;

// mailInput.oninput = function () {
//     localStorage.setItem('Email', this.value);
// }

const passInput = document.getElementById('password');

const passValue = localStorage.getItem('Password');
passInput.value = passValue;

// passInput.oninput = function () {
//     localStorage.setItem('Password', this.value);
// }

const button = document.getElementById('button');

button.onclick = function () {
    localStorage.setItem('Name', nameInput.value);
    localStorage.setItem('Email', mailInput.value);
    localStorage.setItem('Password', passInput.value);
}
const signLink = document.getElementById('sign__link');
const createLink = document.getElementById('create__link');
const createCard = document.getElementById('create__card');
const signCard = document.getElementById('sign__card');

createLink.onclick = function () {
    createCard.style.display = 'block'
    signCard.style.display = 'none'
}
signLink.onclick = function () {
    createCard.style.display = 'none'
    signCard.style.display = 'block'
}
