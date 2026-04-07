import { myProjects } from "./myprojects.js";

const cardsContainer = document.querySelector(".cards-container");

myProjects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    link.appendChild(img);
    card.appendChild(link);
    card.appendChild(title);
    card.appendChild(description);
    cardsContainer.appendChild(card);
});