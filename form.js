const myForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
    e.preventDefault();

    const user = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    console.log(user);
    myForm.reset();
}
