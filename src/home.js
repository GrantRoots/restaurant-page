export {homeButton}

function homeButton() {
    content.innerHTML = ''
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Grant's Restaurant";

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = "This restaurant is so wonderful!";

    content.appendChild(headline);
    content.appendChild(text);
}