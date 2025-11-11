import roryRabbitImage from "./images/employee-pictures/rory-rabbit.jpg";
import harryHedgehogImage from "./images/employee-pictures/harry-hedgehog.jpg";
import violetVoleImage from "./images/employee-pictures/violet-vole.jpg";
import coryCrabImage from "./images/employee-pictures/cory-crab.jpg";
import annyAlligatorImage from "./images/employee-pictures/anny-alligator.jpg";
import derekDeerImage from "./images/employee-pictures/derek-deer.jpg";

export default function() {
  const contentDiv = document.querySelector("div#content");

  const header = document.createElement("h1");
  header.textContent = "Contacts";
  header.classList.add("header");

  const introductoryPara = document.createElement("p");
  introductoryPara.textContent = "At the Salad Bar, we have five very hard working staff and a watchful manager, who spend put all of their effort into making sure that this is the best place for a customer to come to. The waiters show proper etiquette, and the food is always delicious. Below is the contact details of all of our staff members:";
  introductoryPara.classList.add("intro-para");

  const contactGrid = document.createElement("div");
  [{name: "Rory Rabbit", job: "Waiter", email: "roryrabbit@example.com", image: roryRabbitImage },
   {name: "Harry Hedgehog", job: "Waiter", email: "harryhedge@example.com", image: harryHedgehogImage },
   {name: "Violet Vole", job: "Waitress", email: "viovol@example.com", image: violetVoleImage },
   {name: "Cory Crab", job: "Cook", email: "crabbycory@example.com", image: coryCrabImage },
   {name: "Anny Alligator", job: "Cook", email: "annyalli@example.com", image: annyAlligatorImage },
   {name: "Derek Deer", job: "Manager", email: "derekdeermanager@example.com", image: derekDeerImage },
  ].forEach(setOfData => {
    const div = document.createElement("div");
    const person = document.createElement("h3");
    const job = document.createElement("p");
    const email = document.createElement("p");
    const image = document.createElement("img");

    person.textContent = setOfData.name;
    job.textContent = setOfData.job;
    job.classList.add("job");
    email.textContent = setOfData.email;
    email.classList.add("email");
    image.alt = `Picture of the employee ${setOfData.name}.`;
    image.src = setOfData.image;

    div.appendChild(person);
    div.appendChild(job);
    div.appendChild(image);
    div.appendChild(email);
    contactGrid.appendChild(div);
  });
  contactGrid.classList.add("contact-grid");

  contentDiv.appendChild(header);
  contentDiv.appendChild(introductoryPara);
  contentDiv.appendChild(contactGrid);
}
