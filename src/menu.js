import caeserSaladImage from "./images/menu-pictures/caeser-salad.jpg";

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
    image.src = caeserSaladImage;

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
  const linkToTraditional = document.createElement("a");
  linkToTraditional.href = "#Traditional";
  linkToTraditional.textContent = "Traditional";
  const linkToSides = document.createElement("a");
  linkToSides.href = "#Sides";
  linkToSides.textContent = "Sides";
  const linkToSpecial = document.createElement("a");
  linkToSpecial.href = "#Specials";
  linkToSpecial.textContent = "Specials";
  [linkToTraditional, linkToSides, linkToSpecial].forEach(link => {
    link.addEventListener("click", evt => {
      evt.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });

    const li = document.createElement("li");
    li.appendChild(link);
    links.appendChild(li);
  });

  const traditionalFood = createCards(
    [{name: "Caeser Salad", description: "A beautiful salad full of lettuce and the signature croutons.", price: "£5", image: caeserSaladImage},
  {name: "Caprese Salad", description: "An Italian salad made of fresh mozzarella, tomatoes and basil, with a bit of salt an olive oil on top.", price: "£6", image: caeserSaladImage},
  {name: "Cobb Salad", description: "An American garden salad containing salad greens, eggs, chicken breast and more, arranged in neat rows.", price: "£4", image: caeserSaladImage},
  {name: "Greek Salad", description: "A traditional part of the Greek cuisine, made with cucumber, feta cheese and more.", price: "£4", image: caeserSaladImage},
  {name: "Fruit Salad", description: "A mixture of cut up different fruits, including apples, grapes etc.", price: "£3", image: caeserSaladImage},
  ], "Traditional");

  const specialFood = createCards(
    [{name: "Beef Heaven", description: "A salad of green leaves, filled to the brim with steak pieces.", price: "£10", image: caeserSaladImage},
    {name: "Vegan Kingdom", description: "Every single piece of vegetable and fruit imaginable.", price: "£8", image: caeserSaladImage},
    {name: "Challenger's Salad", description: "It's simple really - 10 bowls (20kg) of salad, and if you eat it within 1hr30mins, then it's free.", price: "£30", image: caeserSaladImage},
    ], "Specials");

  const sides = createCards(
    [{name: "Pepper Sticks", description: "Some hearty sticks of pepper to have on the side of your meal.", price: "50p", image: caeserSaladImage},
    {name: "Carrot Sticks", description: "Crunchy carrot sticks to compliment the meal.", price: "50p", image: caeserSaladImage},
    {name: "Mushy Peas", description: "A fish and chips special, but for salad instead.", price: "£1", image: caeserSaladImage},
    ], "Sides");

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
  contentDiv.appendChild(backToTopBtn);
}
