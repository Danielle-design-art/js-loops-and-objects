console.log("loops and objects");

//problem 1
console.log("counting");

let counting = [];

for (let i = 1; i <= 10; i++) {
  counting.push(i);
}

console.log(counting);

//problem 2
console.log("even numbers");

for (i = 2; i < 22; i += 2) {
  console.log(i);
}

//problem 3
console.log("Animals");

let Animals = [
  "Cats",
  "Nano Fish",
  "Birds",
  "Dogs",
  "Horses",
  "Chickens",
  "Potbelly Pigs",
];

console.log(Animals);

for (let Animal of Animals) {
  console.log(Animal + " are beautiful!");
}

//problem 4
console.log("Colors in reverse");

let colors = ["maroon", "teal", "lavender", "rouge", "pink", "yellow"];

console.log(colors);

colors.reverse();
