const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

console.log(foodSchedule);

let f = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan) {
    console.log(foodSchedule[i].name);
  } else {
    foodSchedule[i].name = fruits[f];

    console.log(fruits[f]);
    f++;
  }
}
