import caeserSaladImage from "./images/menu-pictures/caeser-salad.jpg";
import capreseSaladImage from "./images/menu-pictures/caprese-salad.jpg";
import cobbSaladImage from "./images/menu-pictures/cobb-salad.jpg";
import greekSaladImage from "./images/menu-pictures/greek-salad.jpg";
import pepperSticksImage from "./images/menu-pictures/sliced-pepper.jpg";

import carrotSticksImage from "./images/menu-pictures/carrot-sticks.jpg";
import mushyPeasImage from "./images/menu-pictures/mushy-peas.jpg";
import saladSauceImage from "./images/menu-pictures/salad-sauce.jpg";

import beefHeavenImage from "./images/menu-pictures/beef-heaven.jpg";
import veganKingdomImage from "./images/menu-pictures/vegan-kingdom.jpg";
import challengersSaladImage from "./images/menu-pictures/challengers-salad.jpg";

import fruitSaladImage from "./images/menu-pictures/fruit-salad.jpg";
import bananaSplitImage from "./images/menu-pictures/banana-split.jpg";


function createCards(cards, header) {
  const foodDiv = document.createElement("div");
  const foodHeader = document.createElement("h2");
  const foodGrid = document.createElement("div");
  foodHeader.textContent = header;
  foodHeader.classList.add("header");

  cards.forEach(card => {
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = card.name;
    name.classList.add("name");
    description.textContent = card.description;
    description.classList.add("description");
    price.textContent = card.price;
    price.classList.add("price");
    image.alt = `image of ${card.name}`;
    image.src = card.image;

    [image, name, description, price].forEach(element => {
      div.appendChild(element);
    });
    foodGrid.appendChild(div);
  });

  foodGrid.classList.add("food-grid");
  foodDiv.setAttribute("id", header);
  foodDiv.classList.add("food-div");
  foodDiv.appendChild(foodHeader);
  foodDiv.appendChild(foodGrid);

  return foodDiv;
}

export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "Menu";
  header.classList.add("header");

  const introductoryPara = document.createElement("p");
  introductoryPara.textContent = "This menu is filled with exquisite salads, ranging from traditional salads found from around the world, to special salads carefully prepared by our team of talented cooks.";
  introductoryPara.classList.add("intro-para");

  const links = document.createElement("ul");
  links.classList.add("links");

  ["Traditional", "Sides", "Specials", "Puddings"].forEach(linkName => {
    const link = document.createElement("a");
    link.href = `#${linkName}`;
    link.textContent = linkName;

    link.addEventListener("click", evt => {
      console.log(evt.name);
      evt.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });

    const li = document.createElement("li");
    li.appendChild(link);
    links.appendChild(li);
  });

  const traditionalFood = createCards(
    [{name: "Caeser Salad", description: "A beautiful salad full of lettuce and the signature croutons and Parmesan cheese.", price: "£5", image: caeserSaladImage},
  {name: "Caprese Salad", description: "An Italian salad made of fresh mozzarella, tomatoes and basil, with a bit of salt an olive oil on top.", price: "£6", image: capreseSaladImage},
  {name: "Cobb Salad", description: "An American garden salad containing salad greens, eggs, chicken breast and more.", price: "£5", image: cobbSaladImage},
  {name: "Greek Salad", description: "A traditional part of the Greek cuisine, made with cucumber, feta cheese and more.", price: "£4", image: greekSaladImage},
  ], "Traditional");

  const sides = createCards(
    [{name: "Sliced Pepper", description: "Some hearty rings of pepper to have on the side of your meal.", price: "50p", image: pepperSticksImage},
    {name: "Carrot Sticks", description: "Crunchy carrot sticks to compliment the meal.", price: "50p", image: carrotSticksImage},
    {name: "Mushy Peas", description: "A fish and chips special, but for salad instead.", price: "£1", image: mushyPeasImage},
    {name: "Salad Sauce", description: "A blend of different vegetables to make a perfect tray of sauces.", price: "75p", image: saladSauceImage},
    ], "Sides");

  const specialFood = createCards(
    [{name: "Beef Heaven", description: "The salad is barely noticable with this steak right in your line of sight.", price: "£10", image: beefHeavenImage},
    {name: "Vegan Kingdom", description: "Every single piece of vegetable and fruit imaginable.", price: "£8", image: veganKingdomImage},
    {name: "Challenger's Salad", description: "It's simple really - 10 bowls (20kg) of salad, and if you eat it within 1hr30mins, then it's free!", price: "£30", image: challengersSaladImage},
    ], "Specials");

  const puddings = createCards(
    [{name: "Fruit Salad", description: "A mixture of cut up different fruits, including apples, grapes etc.", price: "£3", image: fruitSaladImage},
    {name: "Banana Split", description: "A classic American pudding, made with banana, three scoops of ice cream, and sauces on top.", price: "£4", image: bananaSplitImage},
    ], "Puddings");

  const backToTopBtn = document.createElement("button");
  backToTopBtn.textContent = "^ Back to top ^";
  backToTopBtn.classList.add("back-to-top");
  backToTopBtn.addEventListener("click", evt => {
    scrollTo({top: 0, behavior: "smooth"});
  });

  contentDiv.appendChild(header);
  contentDiv.appendChild(introductoryPara);
  contentDiv.appendChild(links);
  contentDiv.appendChild(traditionalFood);
  contentDiv.appendChild(sides);
  contentDiv.appendChild(specialFood);
  contentDiv.appendChild(puddings);
  contentDiv.appendChild(backToTopBtn);
}
