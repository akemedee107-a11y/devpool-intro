// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// Show More

const infoBtn = document.getElementById("infoBtn");
const extraInfo = document.getElementById("extraInfo");

infoBtn.addEventListener("click", () => {

    if (extraInfo.style.display === "none") {

        extraInfo.style.display = "block";

    } else {

        extraInfo.style.display = "none";

    }

});


// Live Input

const userInput = document.getElementById("userInput");
const outputText = document.getElementById("outputText");

userInput.addEventListener("input", () => {

    outputText.textContent =
        "คุณพิมพ์ : " + userInput.value;

});