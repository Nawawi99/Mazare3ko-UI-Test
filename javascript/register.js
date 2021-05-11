const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email-address");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const signUpForm = document.querySelector("#sign-up-form");
const signUpSubmitButton = document.getElementById("sign-up-button");
let errorMessage = document.querySelector(".error-message");
const signUpInputs = document.querySelectorAll(".reg-input");
const signInInputs = document.querySelectorAll(".login-input");
let letters = /^[A-Za-z]+$/;
const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneNumberValidation = /^(00962|962|\+962|07)(7|8|9)([0-9]{7})$/;
let messages = [];

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    for (let i = 0; i < signInInputs.length; i++) {
        signInInputs[i].value = "";
    }
});
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    errorMessage.textContent = "";
    firstName.value = "";
    lastName.value = "";
    emailAddress.value = "";
    password.value = "";
    phoneNumber.value = "";
    for (let i = 0; i < signUpInputs.length; i++) {
        signUpInputs[i].classList.remove("red-border");
        signUpInputs[i].classList.remove("green-border");
    }
});

//Focus Borders for Sign In
for (let i = 0; i < signInInputs.length; i++) {
    signInInputs[i].addEventListener("focus", () => {
        signInInputs[i].classList.add("black-border");
    });

    signInInputs[i].addEventListener("blur", () => {
        signInInputs[i].classList.remove("black-border");
    });
}

// Border (Live Colors) Validation
function redLineBorder(elementValue) {
    $(elementValue).removeClass("green-border");
    $(elementValue).addClass("red-border");
}
function greenLineBorder(elementValue) {
    $(elementValue).removeClass("red-border");
    $(elementValue).addClass("green-border");
}

//******Sign Up live Validator*********//

function nameLiveValidator(name) {
    if (!name.value.match(letters)) {
        redLineBorder(name);
    } else if (name.value.length > 13 || name.value.length < 3) {
        redLineBorder(name);
    } else {
        greenLineBorder(name);
    }
}

function emailLiveValidator(email) {
    if (!email.value.match(emailValidation)) {
        redLineBorder(email);
    } else {
        greenLineBorder(email);
    }
}

function phoneLiveValidator(number) {
    if (!number.value.match(phoneNumberValidation)) {
        redLineBorder(number);
    } else {
        greenLineBorder(number);
    }
}

function passwordLiveValidator(password) {
    if (password.value.length < 6 || password.value.length > 14) {
        redLineBorder(password);
    } else {
        greenLineBorder(password);
    }
}
// **************************************************

function nameSubmitValidator(name) {
    if (!name.value.match(letters)) {
        messages.push("First/Last Name can't be empty");
    } else if (name.value.length > 13 || name.value.length < 3) {
        messages.push("First/Last Name should be between 3 and 13 characters");
    } else {
    }
}

function emailSubmitValidator(email) {
    if (!email.value.match(emailValidation)) {
        messages.push(" invalid email");
    }
}

function phoneSubmitValidator(number) {
    if (!number.value.match(phoneNumberValidation)) {
        messages.push("Invalid phone number");
    }
}

function passwordSubmitValidator(password) {
    if (password.value.length < 6 || password.value.length > 14) {
        messages.push("password is too short");
    }
}

for (let i = 0; i < signUpInputs.length; i++) {
    switch (i) {
        case 0:
            signUpInputs[i].addEventListener("input", () => {
                nameLiveValidator(signUpInputs[i]);
            });
            break;

        case 1:
            signUpInputs[i].addEventListener("input", () => {
                nameLiveValidator(signUpInputs[i]);
            });
            break;

        case 2:
            signUpInputs[2].addEventListener("input", () => {
                emailLiveValidator(signUpInputs[2]);
            });
            break;

        case 3:
            signUpInputs[3].addEventListener("input", () => {
                phoneLiveValidator(signUpInputs[3]);
            });
            break;

        case 4:
            signUpInputs[4].addEventListener("input", () => {
                passwordLiveValidator(signUpInputs[4]);
            });
            break;

        default:
            break;
    }
}

//*****Sign Up submit Validators *********/

signUpForm.addEventListener("submit", (e) => {
    
    nameSubmitValidator(firstName);
    nameSubmitValidator(lastName);
    emailSubmitValidator(emailAddress);
    phoneSubmitValidator(phoneNumber);
    passwordSubmitValidator(password);
    let uniqueMessages = [...new Set(messages)];
    if (uniqueMessages.length !== 0) {
        errorMessage.textContent = uniqueMessages;
        messages = [];
        uniqueMessages = [];
        e.preventDefault()
    } else {
        return true;
    }
});
