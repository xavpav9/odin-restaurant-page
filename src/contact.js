export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "Contact";
  header.classList.add("header");

  contentDiv.appendChild(header);
}
