const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalSales = products.reduce((total, product) => total + product.sellCount, 0);

console.log("El importe total de las ventas es:", totalSales);