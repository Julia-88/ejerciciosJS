const midElements = document.querySelectorAll(".fn-insert-here");


for (let element of midElements) {
    let p = document.createElement('p');
    p.innerHTML = "Voy dentro!";
    element.appendChild(p);
}