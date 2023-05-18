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
