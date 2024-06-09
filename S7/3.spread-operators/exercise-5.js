const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copiedColorsArray = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(copiedColorsArray);