export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "Home";
  header.classList.add("header");

  const introductoryPara = document.createElement("p");
  introductoryPara.textContent = "Welcome to the home page of the salad bar. We have many different foods for you to choose from, but mainly focused on salad. We hope that you can come to our restaurant and enjoy our exquisite salads with us.";


  contentDiv.appendChild(header);
  contentDiv.appendChild(introductoryPara);
}
