export {aboutButton}

function aboutButton() {
    content.innerHTML = ''
    const about = document.createElement("div");
    about.classList.add("text");
    about.textContent = "We are the best restaurant ever.";

    content.appendChild(about);
}