export {menuButton}

function menuButton() {
    content.innerHTML = ''
    const menuText = document.createElement("div");
    menuText.classList.add("text");
    menuText.textContent = "We serve only Steak and Fries / Baked Potatoes.";
    content.appendChild(menuText)
}