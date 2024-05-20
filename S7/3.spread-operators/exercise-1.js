const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersName = users.map(() => {
    return {
        name: user.name,
        age: user.age
    }
})

console.log(usersName);