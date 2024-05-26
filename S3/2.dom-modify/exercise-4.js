const container = document.querySelector("body");
console.log(container);

const h2Div = document.createElement("div");


  const newP = document.createElement("p");
  newP.innerHTML = "Soy dinámico";
  h2Div.appendChild(newP);

container.appendChild(h2Div);