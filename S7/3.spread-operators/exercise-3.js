const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const spreadArray = [...pointsList, ...pointsLis2];
const nospreadArray = [pointsList, pointsLis2];

console.log(spreadArray);
console.log(nospreadArray);
