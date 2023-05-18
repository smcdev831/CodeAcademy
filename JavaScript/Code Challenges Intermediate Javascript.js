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
