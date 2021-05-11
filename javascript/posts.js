const posts = document.querySelectorAll(".post");
const cards = Array.from(document.querySelectorAll(".post-container"));
const container = document.querySelector("#container-cards");
const priceLowToHighSort = document.querySelector("#price-low-to-high");
const priceHighToLowSort = document.querySelector("#price-high-to-low");
const locationSort = document.querySelectorAll("#location");
const locations = document.querySelectorAll(".location");
const landingButton = $(".landing-button");
const rentalForm = $(".rental-reg-form");
const checkBoxButton = Array.from($("[name = 'days']"));
const regForm = $(".rental-reg-form");
let errorMsg = document.querySelector(".error");

regForm.on("submit", (e) => {
    if(checkBoxButton.every(b => !b.checked)){
        e.preventDefault();
        errorMsg.textContent = "One box atleast should be Checked.."  
    }
})

landingButton.on("click", () => {
    if (rentalForm.css("display") === "none") {
        rentalForm.slideDown(300);
        landingButton.text("Close");
    } else {
        rentalForm.slideUp(300);
        landingButton.text("Here");
    }
});



priceLowToHighSort.addEventListener("click", () => {
    cards.sort((cardA, cardB) => {
        let priceA = parseInt(cardA.querySelector(".price").textContent.replace("$/day", ""));
        let priceB = parseInt(cardB.querySelector(".price").textContent.replace("$/day", ""));
        return priceA - priceB;
    });

    let dynamicContainer = "";
    cards.forEach((card, index, cards) => {
        if (index % 2 === 0) {
            dynamicContainer += "<div class ='row'>";
        }
        dynamicContainer += "<div class='col-lg-6'>" + card.innerHTML + "</div>";
        if (index % 2 || index === cards.length - 1) {
            dynamicContainer += "</div>";
            console.log(index, card, cards);
        }
    });
    container.innerHTML = dynamicContainer;
});

priceHighToLowSort.addEventListener("click", () => {
    cards.sort((cardA, cardB) => {
        let priceA = parseInt(cardA.querySelector(".price").textContent.replace("$/day", ""));
        let priceB = parseInt(cardB.querySelector(".price").textContent.replace("$/day", ""));
        return priceB - priceA;
    });

    let dynamicContainer = "";
    cards.forEach((card, index, cards) => {
        if (index % 2 === 0) {
            dynamicContainer += "<div class ='row'>";
        }
        dynamicContainer += "<div class='col-lg-6'>" + card.innerHTML + "</div>";
        if (index % 2 || index === cards.length - 1) {
            dynamicContainer += "</div>";
        }
    });
    container.innerHTML = dynamicContainer;
});
