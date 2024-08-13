const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// ---------- Exercise ----------

const pointOne = document.createElement("p");
pointOne.style.color = "red";
pointOne.textContent = "Hey I'm red!";
container.appendChild(pointOne);

const pointTwo = document.createElement("h3")
pointTwo.style.color = "blue";
pointTwo.textContent = "I'm a blue h3!";
container.appendChild(pointTwo);

const pointThree = document.createElement("div");
pointThree.setAttribute("style", "border: 1px solide black; background-color: pink;");

const pointThreeChildOne = document.createElement("h1");
pointThreeChildOne.textContent = "I'm in a div.";
pointThree.appendChild(pointThreeChildOne);

const pointThreeChildTwo = document.createElement("p");
pointThreeChildTwo.textContent = "ME TOO!";
pointThree.appendChild(pointThreeChildTwo);

container.append(pointThree);