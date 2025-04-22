console.log("loops and objects");


//Part1
//problem 1
console.log("counting");

let counting = [];

for (let i = 0; i <= 10; i++) {
  counting.push(i);
}

console.log(counting);

//problem 2
console.log("even numbers");

for (i = 0; i < 22; i += 2) {
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

for (let i=colors.length; i>= 0; i--){
  console.log(colors[i])
}





//Part 2
//problem 5
console.log("All About Mickey")

const person = {
    Name: "Mickey",
    age: 40,
    favoriteColor: "purple",
  };
  
console.log("My name is " + person.Name + ", I'm " + person.age + " years old and my favorite color is " + person.favoriteColor)

  console.log(person);
  // Expected output: {"My name is Mickey . I'm 40 and my favorite color is purple." }


  //problem 6
person.hobby = "cooking";

console.log(person)


//problem 7
console.log("Books")

let books = [
{title: "The Cat In The Hat",
    author: "Dr. Seuss",
    pages: 61 },
{ title: "The Cricket In Times Square",
    author: "George Selden",
    pages: 79 },
{ title: "The Firm",
    author: "John Grisham",
    pages:560,
    isFavorite:true },
]

for ( let i = 0; i < books.length; i++) {
  let bookObjective = books[i];
  console.log(bookObjective.title + " by " + bookObjective.author + " has " + bookObjective.pages + " pages")
}

console.log(books)




//problem 8
console.log("find favorite book")



 
//Bonus Challenge


