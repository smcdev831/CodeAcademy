//my current age
let myAge = 42;

//How many early years for a dog
let earlyYears = 2;

earlyYears *= 10.5;

//Taking off the early years accounted for
let laterYears = myAge - 2;

//How many years for dog age
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;

myName = "Maria".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
