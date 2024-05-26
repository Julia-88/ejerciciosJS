const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const container = document.querySelector("body");
console.log(container);


let ul = document.createElement('ul');

for (let app of apps) {
    let li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);