console.log("loops and objects");


//Part1
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


//Part 2
//problem 5
console.log("All About Mickey")

const person = {
    Name: "Mickey",
    age: 40,
    favoriteColor: "red",
  };
  


  console.log(person);
  // Expected output: {"My name is Mickey . I'm 40 and my favorite color is purple." }


  //problem 6
person.hobby = "cooking";

console.log(person)


//problem 7
console.log("Books")

let Books = ["The Cat In The Hat", "The Cricket In Times Square", "The Firm"]

console.log(Books)



const book = {
    title: "The Cat In The Hat",
    author: "Dr. Seuss",
    pages: 61
}


book.print = ["The Cat In The Hat by Dr. Seuss-61 pages"]

console.log(book)




const book2 = {
    title: "The Cricket In Times Square",
    author: "George Selden",
    pages:79
}

console.log(book2)

book2.print = ["The Cricket In Times Square by George Selden-79 pages"]





const book3 = {
    title: "The Firm",
    author: "John Grisham",
    pages:560

}

console.log(book3)

book3.print = ["The Firm by John Grisham-560 pages"]


//problem 8
console.log("find favorite book")


//Bonus Challenge


