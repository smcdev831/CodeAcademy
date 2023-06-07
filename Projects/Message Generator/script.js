function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

const wisdom = {
  signs: ["Sun", "Moon", "Star"],
  luck: [
    "good luck",
    "terrible luck",
    "incredible luck",
    "bad luck",
    "neutral luck",
  ],
  status: [
    "go for a walk",
    "learn a new language",
    "try a new food",
    "listen to music",
    "start a journal",
    "visit a museum",
    "learn a new skill",
    "read a book",
    "watch a movie",
    "call a friend",
    "do some volunteer work",
    "try a new form of exercise",
  ],
};

let completeWisdom = [];

for (let prop in wisdom) {
  let optionIdx = generateRandomNumber(wisdom[prop].length);

  switch (prop) {
    case "signs":
      completeWisdom.push(
        `Your sign right now is a ${wisdom[prop][optionIdx]}.`
      );
      break;
    case "luck":
      completeWisdom.push(`You are having ${wisdom[prop][optionIdx]}.`);
      break;
    case "status":
      completeWisdom.push(`You should ${wisdom[prop][optionIdx]}.`);
      break;
    default:
      completeWisdom.push("There is not enough info.");
  }
}

function formatWisdom(wisdoms) {
  const formatted = completeWisdom.join("\n");
  console.log(formatted);
}

formatWisdom(completeWisdom);
