const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let pequeñas = [];
let medianas = [];
let grandes = [];

for (let i = 0; i < movies.length; i++) {

    if (movies[i].durationInMinutes<100) {pequeñas.push(movies[i].name);
    
    } else if (movies[i].durationInMinutes >=100&& movies[i].durationInMinutes<200){
        medianas.push(movies[i].name);
    
    } else {
        grandes.push(movies[i].name)}
}

console.log("Estas son las películas medianas", medianas);

console.log("Estas son las películas pequeñas", pequeñas);

console.log("Estas son las películas más grandes", grandes);