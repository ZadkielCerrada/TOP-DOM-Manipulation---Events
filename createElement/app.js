const container = document.querySelector("#container");

// Elements

const content = document.createElement("div");
content.textContent = "This is the glorious text-content!";

const pRed = document.createElement("p");
pRed.textContent = "Hey I'm red!";

const h3Blue = document.createElement("h3");
h3Blue.textContent = "I'm a blue h3";

const divPink = document.createElement("div");

const divPinkH1 = document.createElement("h1");
divPinkH1.textContent = "I'm in a div";

const divPinkP = document.createElement("p");
divPinkP.textContent = "ME TOO!";

// Append

container.appendChild(content);
container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(divPink);

divPink.appendChild(divPinkH1);
divPink.appendChild(divPinkP);

// Style

pRed.style.color = "red";
h3Blue.style.color = "blue";
divPink.style.backgroundColor = "pink";
