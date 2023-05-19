// Write your code here:
function reverseArray(sentence) {
  let newSentence = [];
  for (let i = sentence.length - 1; i >= 0; i--) {
    newSentence.push(sentence[i]);
  }
  return newSentence;
}
// When you're ready to test your code, uncomment the below and run:
const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// Write your code here:
function greetAliens(aliens) {
  for (let i = 0; i < aliens.length; i++) {
    console.log(
      `Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`
    );
  }
}
// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

// Write your code here:
function convertToBaby(animals) {
  let babyAnimals = [];
  for (let i = 0; i < animals.length; i++) {
    babyAnimals.push(`baby ${animals[i]}`);
  }
  return babyAnimals;
}
// When you're ready to test your code, uncomment the below and run:
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
console.log(convertToBaby(animals));

const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};
console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];
const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};
// Write your code here:
function declineEverything(veggies) {
  veggies.forEach(politelyDecline);
}
function acceptEverything(veggies) {
  veggies.forEach((veggie) => {
    console.log(`Ok, I guess I will eat some ${veggie}.`);
  });
}
declineEverything(veggies);
acceptEverything(veggies);

const numbers = [2, 7, 9, 171, 52, 33, 14];
const toSquare = (num) => num * num;
// Write your code here:
function squareNums(numbers) {
  return numbers.map(toSquare);
}
console.log(squareNums(numbers));

// Write your code here:
function shoutGreetings(greetings) {
  let loudGreetings = [];
  for (let i = 0; i < greetings.length; i++) {
    loudGreetings.push(greetings[i].toUpperCase() + "!");
  }
  return loudGreetings;
}
// Feel free to uncomment out the code below to test your function!
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];
console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

// Write your code here:
function sortYears(years) {
  return years.sort().reverse();
}
// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

// Write your code here:
const justCoolStuff = (coolStuff, myStuff) => {
  return coolStuff.filter((word) => myStuff.includes(word));
};
// Feel free to uncomment the code below to test your function
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];
const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];
console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// Write your code here:
const isTheDinnerVegan = (dinner) =>
  dinner.every((food) => food.source === "plant");
// Feel free to comment out the code below to test your function
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];
console.log(isTheDinnerVegan(dinner));
// Should print false

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];
// Write your code here:
function sortSpeciesByTeeth(arr) {
  arr.sort((a, b) => a.numTeeth - b.numTeeth);
  return arr;
}
// Feel free to comment out the code below when you're ready to test your function!
console.log(sortSpeciesByTeeth(speciesArray));
// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// Write your code here:
const findMyKeys = (arr) =>
  arr.findIndex((item) => {
    return item === "keys";
  });
// Feel free to comment out the code below to test your function
const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];
console.log(findMyKeys(randomStuff));
// Should print 4
