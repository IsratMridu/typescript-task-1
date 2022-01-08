"use strict";
const email = document.querySelector('#email');
const password = document.querySelector('#password');
function loginUser(event) {
    event.preventDefault();
    class User {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }
    }
    const jubair = new User(email.value, password.value);
    // console.log(jubair);
    if (jubair.email === 'admin@admin.com' && jubair.password === 'admin123') {
        window.location.href = 'index1.html';
    }
    else {
        alert('Enter Correct Email and Password');
    }
}
