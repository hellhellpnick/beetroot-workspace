let a = 0;

while (a <= 2) {
  console.log("while", a);
  a += 1;
}

for (let i = 0; i < 2; i++) {
  console.log("for", i);
  // break;
  continue;
  console.log(i * 10);
}

const users = [
  { id: 1, name: "Sasha", age: 27 }, // 0
  { id: 2, name: "Pasha", age: 16 }, // 1
  { id: 3, name: "Dasha", age: 24 }, // 2
  { id: 4, name: "Vova", age: 28 }, // 3
  { id: 5, name: "Elya", age: 17 }, // 4
  { id: 6, name: "Liza", age: 15 }, // 5
];

let junior;

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(user);
  if (user.age < 18) {
    junior = {...user};
    break;
  };
}

// users.forEach(user => {
//   console.log(user);
//   if (user.age < 18) juniors.push(user);
// });

console.log('junior', junior);
console.log("END");
