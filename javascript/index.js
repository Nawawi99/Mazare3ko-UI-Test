const navLink = document.querySelector(".nav-link")
const titleImage = $(".title-image");
const toggleForm = $(".toggle-form");

navLink.addEventListener("click", function(){
    titleImage.slideUp(700);
    toggleForm.delay(700).slideDown(700);
});


const showPassword = $("#show-password-checkbox");
const passwordBox = $("#password-box");

showPassword.on("click", function(){
    if(passwordBox.attr("type") === "password"){
        passwordBox.attr("type", "text");
    }
    else{
        passwordBox.attr("type", "password");
    }
});

const signInBoxes = document.querySelectorAll(".title-sign-in-box");
const signInLabels = document.querySelectorAll(".title-sign-in-label");


for(let i = 0; i < signInBoxes.length; i++ ){
    signInBoxes[i].addEventListener("focus", function(){
        signInLabels[i].style.fontSize = "17px";
        
    });

    signInBoxes[i].addEventListener("blur", function(){
        signInLabels[i].style.fontSize = "22px";
    });
}









