import { myProjects } from "./myprojects.js";

function renderProjects(container, projects) {
    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card");

        const link = document.createElement("a");
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener";
        link.classList.add("project-link");

        const imageWrap = document.createElement("div");
        imageWrap.classList.add("project-image-wrap");

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = `${project.title} preview`;
        img.loading = "lazy";
        img.classList.add("project-image");

        imageWrap.appendChild(img);
        link.appendChild(imageWrap);

        const body = document.createElement("div");
        body.classList.add("card-body");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        body.appendChild(title);
        body.appendChild(description);

        if (project.tag) {
            const tag = document.createElement("span");
            tag.classList.add("tag");
            tag.textContent = project.tag;
            body.appendChild(tag);
        }

        link.appendChild(body);
        card.appendChild(link);
        container.appendChild(card);
    });
}

const homeContainer = document.querySelector("#home-projects");
if (homeContainer) {
    renderProjects(homeContainer, myProjects.slice(0, 4));
}

const portfolioContainer = document.querySelector("#portfolio-projects");
if (portfolioContainer) {
    renderProjects(portfolioContainer, myProjects);
}
