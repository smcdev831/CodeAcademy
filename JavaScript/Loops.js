// Write your code below
let vacationSpots = ["Scotland", "Iceland", "France"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Write your code below
for (let i = 5; i < 11; i++) {
  console.log(i);
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

const vacationSpots = ["Bali", "Paris", "Tulum"];
// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Write your code below
let bobsFollowers = ["John", "Maria", "Renee", "C"];
let tinasFollowers = ["John", "Maria", "TiTi"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);

const cards = ["diamond", "spade", "heart", "club"];
// Write your code below
let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Write your code below
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do {
  cupsAdded += 1;
  console.log(` ${cupsAdded} cups of sugar added`);
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Tupac") break;
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");

Quiz: 100%