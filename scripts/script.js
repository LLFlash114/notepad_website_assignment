console.log("Beginning Javascript ");


const themeButton = document.querySelector(".theme_button");
const cancelButton = document.querySelector(".cancel_button");
const textArea = document.querySelector("textarea");

// Makes the background colors of the sidebar, textarea container, buttons, darker and text should be updated to "Light Theme" // 
function darkTheme () {
    const aside = document.querySelector("aside");
    const buttons = document.querySelectorAll("button"); 
    aside.classList.toggle("dark-aside");
    textArea.classList.toggle("dark-textarea");
    for (let item of buttons) {
        item.classList.toggle("dark-buttons");
    }
    if(themeButton.textContent === "Dark Theme" ) {
        themeButton.textContent = "Light Theme"
    }else{
        themeButton.textContent = "Dark Theme"
    }
}

// Hides the save button, cancel button, and textarea //
function cancel () {
    const saveCancelButtons = document.querySelector(".button-2")
    saveCancelButtons.style.visibility = "hidden"
    textArea.style.visibility = "hidden"
}

themeButton.addEventListener('click', darkTheme);
cancelButton.addEventListener('click', cancel)