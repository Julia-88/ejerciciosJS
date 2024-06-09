const userAnswers = [];


function confirmExample(description) {
    return confirm(description);
}

function promptExample(description) {
    return prompt(description);
}

function father(description, callback) {
    const result = callback(description);
    userAnswers.push(result);
}

father("Soy un texto", confirmExample); 
father("soy una descripcion", promptExample); 


console.log(userAnswers); 