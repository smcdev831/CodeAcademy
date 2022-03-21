let vacationSpots = ['Scotland', 'England', 'Ireland']

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (let i = 5; i < 11; i++) {
  console.log(i);
}

for (let i = 3; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

let bobsFollowers = ['John', 'cookie', 'Maria', 'Hendry']
let tinasFollowers = ['John', 'Leo', 'Maria']
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let o = 0; o < tinasFollowers.length; o++) {
    if (bobsFollowers[i] === tinasFollowers[o]) {
      mutualFollowers.push(bobsFollowers[i])
      console.log(mutualFollowers);
    }
  }
}

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
