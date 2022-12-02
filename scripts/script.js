const themeButton = document.querySelector(".theme_button");
const cancelButton = document.querySelector(".cancel_button");
const textArea = document.querySelector("textarea");
const saveCancelButtons = document.querySelector(".button-2")
const newNoteButton = document.querySelector(".new_note_button")
const saveButton = document.querySelector(".save_button")
const notesList = document.querySelector(".notes-bullets")
const aside = document.querySelector("aside");
const asideH2 = document.querySelector("aside h2");
const buttons = document.querySelectorAll("button");
const headerMain = document.querySelector(".header-main")
const headerMainH1 = document.querySelector(".header-main h1")
const bulletItems = document.querySelectorAll('li')
const footerH3 = document.querySelector('footer h3')

// Makes the background colors of the sidebar, textarea container, buttons, darker and text should be updated to "Light Theme" // 
function darkTheme () {
    aside.classList.toggle("dark-theme");
    asideH2.classList.toggle("dark-theme-text");
    textArea.classList.toggle("dark-theme");
    headerMain.classList.toggle('dark-theme-body')
    headerMainH1.classList.toggle('dark-theme-text')
    footerH3.classList.toggle('dark-theme-text')
    for (let item of buttons) {
        item.classList.toggle("dark-theme-buttons");
    }
    for (let item of bulletItems) {
        item.classList.toggle("dark-theme-text")
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
}

// Clears the text in the text area // 
function newNote1 () {
    textArea.value = ""
}

// Array of saved notes //
let notesArray = [
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my second note"},
]

// Saves new user entered note if note title isn't null and text area has some text //
function saveNote () {
    if (textArea.value != "" && textArea.value != "This is a placeholder" ) {
        let noteText = textArea.value
        let noteTitle = prompt("Enter note title: ")
        if (noteTitle === null || noteTitle === "") {
            return
        } else {
            notesArray.push({title: noteTitle, body: noteText});
            const newListNote = document.createElement("li")
            newListNote.textContent = noteTitle
            notesList.appendChild(newListNote)
        }        
    }
}

// Fills textarea with the text content of a previously saved note // 
function savedNoteEdit (event) {
    for (let note of notesArray) {
        if (note.title == event.target.textContent) {
            textArea.value = note.body;
        }
    }
}

// Event listeners // 
themeButton.addEventListener('click', darkTheme);
cancelButton.addEventListener('click', cancel);
newNoteButton.addEventListener('click', newNote);
newNoteButton.addEventListener('click', newNote1);
saveButton.addEventListener('click', saveNote);
notesList.addEventListener('click', savedNoteEdit);