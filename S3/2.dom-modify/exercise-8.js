
const p = document.createElement("p");
p.innerHTML = "Voy en medio!";

const divs = document.querySelectorAll("div");
let parent = divs[0].parentNode;

parent.insertBefore(p, divs[1]);