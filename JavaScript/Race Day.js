let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 19;

if (registeredEarly === true && runnersAge > 18) {
  racerNumber = raceNumber + 1000;
} else {
  racerNumber = raceNumber;
}

if (racerNumber > 1000) {
  console.log(`You will race at 9:30A and your racer number is ${racerNumber}`);
} else if (registeredEarly === false && runnersAge > 18) {
  console.log(
    `You will race at 11:00A and your racer number is ${racerNumber}`
  );
} else if (runnersAge < 18) {
  console.log(
    `You will race at 12:30P and your racer number is ${racerNumber}`
  );
} else {
  console.log("Please see the registration desk!");
}
