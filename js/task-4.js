"use strict";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onSubmitForm);
function onSubmitForm(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if(email === "" || password === "") {
        return alert("All form fields must be filled in"); 
    }
    const trimmedValue = {
        email: email.trim(),
        password: password.trim(),
    };
    console.log(trimmedValue)
    loginForm.reset();
}