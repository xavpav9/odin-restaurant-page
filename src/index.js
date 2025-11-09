import "./style.css";
import createHomeTab from "./home.js";
import createMenuTab from "./menu.js";
import createAboutTab from "./about.js";
import createContactTab from "./contact.js";

const screenController = (function() {
  const contentDiv = document.querySelector("div#content");

  function clearScreen() {
    contentDiv.textContent = ""; 
  }

  document.querySelector("button.home").addEventListener("click", evt => {
    clearScreen();
    createHomeTab();
  });
  document.querySelector("button.menu").addEventListener("click", evt => {
    clearScreen();
    createMenuTab();
  });
  document.querySelector("button.about").addEventListener("click", evt => {
    clearScreen();
    createAboutTab();
  });
  document.querySelector("button.contact").addEventListener("click", evt => {
    clearScreen();
    createContactTab();
  });
})();

createHomeTab();
