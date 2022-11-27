console.log("Beginning Javascript ");


const btn = document.querySelector(".theme_button");

// Makes the background colors of the sidebar, textarea container, buttons, darker and text should be updated to "Light Theme" // 
function darkTheme () {
    const aside = document.querySelector("aside");
    const textArea = document.querySelector("textarea");
    const buttons = document.querySelectorAll("button"); 
    aside.classList.toggle("dark-aside");
    textArea.classList.toggle("dark-textarea");
    for (let item of buttons) {
        item.classList.toggle("dark-buttons");
    }
    if(btn.textContent === "Dark Theme" ) {
        btn.textContent = "Light Theme"
    }else{
        btn.textContent = "Dark Theme"
    }
    
}

btn.addEventListener('click', darkTheme);