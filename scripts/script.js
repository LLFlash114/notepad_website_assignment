console.log("Beginning Javascript ");


const btn = document.querySelector(".theme_button");

// Makes the background colors of the sidebar, textarea container, buttons, darker and text should be updated to "Light Theme" // 
function darkTheme () {
    const aside = document.querySelector("aside");
    const textArea = document.querySelector("textarea");
    const buttons = document.querySelectorAll("button"); 
    aside.classList.add("dark-sidebar");
    textArea.classList.add("dark-textarea");
    buttons.classList.add("dark-buttons");

}

btn.addEventListener('click', darkTheme);