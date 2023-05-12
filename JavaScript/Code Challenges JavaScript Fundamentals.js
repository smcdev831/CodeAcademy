// Write your function here:

const greetWorld = () => {
  return "Hello, World!";
};

console.log(greetWorld());

//Write code to test your function. Even if we provide code to test your function, you should add further tests to make sure your function works correctly in all the specified situations

// Write your function here:

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(canIVote(19)); // Should print true

// We encourage you to add more function calls of your own to test your code!

// Write your function here:

const agreeOrDisagree = (str1, str2) => {
  if (str1 === str2) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};

console.log(agreeOrDisagree("yep", "yep"));
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!

// Write your function here:

function lifePhase(age) {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else if (age < 4) {
    return "baby";
  } else if (age < 13) {
    return "child";
  } else if (age < 20) {
    return "teen";
  } else if (age < 65) {
    return "adult";
  } else {
    return "senior citizen";
  }
}

console.log(lifePhase(5)); //should print 'child'

// We encourage you to add more function calls of your own to test your code!

function finalGrade(gr1, gr2, gr3) {
  if (gr1 > 100 || gr1 < 0 || gr2 > 100 || gr2 < 0 || gr3 > 100 || gr3 < 0) {
    return "You have entered an invalid grade.";
  }

  gradeAverage = Math.floor((gr1 + gr2 + gr3) / 3);

  if (gradeAverage < 60) {
    return "F";
  } else if (gradeAverage < 70) {
    return "D";
  } else if (gradeAverage < 80) {
    return "C";
  } else if (gradeAverage < 90) {
    return "B";
  } else {
    return "A";
  }
}

console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!

// Write your function here:

function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty("Private", "Fido")); // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
  if (
    planet !== "Mercury" &&
    planet !== "Venus" &&
    planet !== "Mars" &&
    planet !== "Jupiter" &&
    planet !== "Saturn"
  ) {
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }

  switch (planet) {
    case "Mercury":
      weight = earthWeight * 0.378;
      break;
    case "Venus":
      weight = earthWeight * 0.907;
      break;
    case "Mars":
      weight = earthWeight * 0.377;
      break;
    case "Jupiter":
      weight = earthWeight * 2.36;
      break;
    case "Saturn":
      weight = earthWeight * 0.916;
      break;
  }
  return weight;
};

console.log(calculateWeight(100, "Jupiter")); // Should print 236

// We encourage you to add more function calls of your own to test your code!

// Write your function here:

function truthyOrFalsy(value) {
  return value ? true : false;
}

console.log(truthyOrFalsy(0)); // Should print false

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
const numImaginaryFriends = (friends) => {
  return Math.ceil(friends * 0.25);
};

console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function sillySentence(adjective, verb, noun) {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

console.log(sillySentence("excited", "love", "functions"));

// We encourage you to add more function calls of your own to test your code!
