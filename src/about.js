import logo from "./images/logos/logo-large.png";

export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "About";
  header.classList.add("header");

  const introductoryDiv = document.createElement("div");
  const introductoryPara1 = document.createElement("p");
  const introductoryPara2 = document.createElement("p");
  introductoryPara1.textContent = "We are a hard working company that aims to provide the best salad to anyone who comes. We offer many different types of salad, ranging from meatfests to vegan dishes. We pride ourselves in our range of salads, and know that our amazing staff will be able to meet all of your need.";
  introductoryPara2.textContent = "We hope that you will enjoy yourself on your next visit to our establishment, and if it is your first time coming, you will get 25% off on any meal!";
  introductoryDiv.classList.add("intro-para");
  introductoryDiv.appendChild(introductoryPara1);
  introductoryDiv.appendChild(introductoryPara2);

  const logoImage = document.createElement("img");
  logoImage.alt = "logo of company";
  logoImage.src = logo;
  logoImage.classList.add("logo");

  contentDiv.appendChild(header);
  contentDiv.appendChild(introductoryDiv);
  contentDiv.appendChild(logoImage);
}
