// index.js

// import odinImage from "./odin.png";
   
// const image = document.createElement("img");
// image.src = odinImage;
   
// document.body.appendChild(image);

import "./styles.css";

import { menuButton } from "./menu.js"
import { homeButton } from "./home.js";
import { aboutButton } from "./about.js";

// PAGE LOAD FUNCTION
window.addEventListener('load', function () {
    const content = document.querySelector("#content");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Grant's Restaurant";

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = "This restaurant is so wonderful!";

    content.appendChild(headline);
    content.appendChild(text);

})

const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    menuButton()
})

const home = document.querySelector('#home')
home.addEventListener('click', () => {
    homeButton()
})

const about = document.querySelector('#about')
about.addEventListener('click', () => {
    aboutButton()
})
  