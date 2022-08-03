const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const pRed = document.createElement("p");
pRed.classList.add("p-red");
pRed.textContent = "Hey I'm red!";

const h3Blue = document.createElement("h3");
h3Blue.classList.add("h3-blue");
h3Blue.textContent = "I'm a blue h3";

const divPink = document.createElement("div");
divPink.classList.add("div-pink");

const divPinkH1 = document.createElement("h1");
divPinkH1.classList.add("div-pink-h1");
divPinkH1.textContent = "I'm in a div";

const divPinkP = document.createElement("p");
divPinkP.classList.add("div-pink-p");
divPinkP.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(divPink);
divPink.appendChild(divPinkH1);
divPink.appendChild(divPinkP);

pRed.style.color = "red";
h3Blue.style.color = "blue";
divPink.style.backgroundColor = "pink";
