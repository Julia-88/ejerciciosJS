const container = document.querySelector("body");
console.log(container);

const h2Div = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const newP = document.createElement("p");
  newP.innerHTML = "Esto es un párrafo dinámico";
  h2Div.appendChild(newP);
}
container.appendChild(h2Div);
