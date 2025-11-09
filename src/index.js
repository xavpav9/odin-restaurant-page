import "./style.css";
import createHomeTab from "./home.js";
import createMenuTab from "./menu.js";
import createAboutTab from "./about.js";
import createContactTab from "./contact.js";

const screenController = (function() {
  const contentDiv = document.querySelector("div#content");
  const btns = [...document.querySelectorAll("nav button")];

  function clearScreen(btn) {
    contentDiv.textContent = ""; 
    for (let btn of btns) {
      btn.classList.remove("selected");
    }
    btn.classList.add("selected");
  }

  document.querySelector("button.home").addEventListener("click", evt => {
    clearScreen(evt.target);
    createHomeTab();
  });
  document.querySelector("button.menu").addEventListener("click", evt => {
    clearScreen(evt.target);
    createMenuTab();
  });
  document.querySelector("button.about").addEventListener("click", evt => {
    clearScreen(evt.target);
    createAboutTab();
  });
  document.querySelector("button.contact").addEventListener("click", evt => {
    clearScreen(evt.target);
    createContactTab();
  });
})();

document.querySelector("button.home").dispatchEvent(new Event("click"));
