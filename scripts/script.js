console.log("Beginning Javascript ");


const themeButton = document.querySelector(".theme_button");
const cancelButton = document.querySelector(".cancel_button");
const textArea = document.querySelector("textarea");
const saveCancelButtons = document.querySelector(".button-2")
const newNoteButton = document.querySelector(".new_note_button")

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
    saveCancelButtons.style.visibility = "hidden"
    textArea.style.visibility = "hidden"
}
// Makes the save button, cancel button, and textarea visible again //
function newNote () {
    saveCancelButtons.style.visibility = "visible";
    textArea.style.visibility = "visible";
    let treat = true 
}

function newNote1 () {
    if (treat = true) {
        textArea.value = ""
    }
}

let userNotes = {
    title:"note one",
    body:"this is my first note"
}

themeButton.addEventListener('click', darkTheme);
cancelButton.addEventListener('click', cancel);
newNoteButton.addEventListener('click', newNote);
newNoteButton.addEventListener('click', newNote1);
