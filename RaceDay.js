let raceNumber = Math.floor(Math.random() * 1000);

registeredEarly = true
runnerAge = 15

if (registeredEarly && runnerAge > 18) {
  bibNumber = raceNumber + 1000
} else {
  bibNumber = raceNumber
}

if (registeredEarly && runnerAge > 18) {
  startTime = '9:30AM'
  console.log('Your bib number is #' + bibNumber + ' and you race at ' + startTime);
} else if (!registeredEarly && runnerAge > 18){
  startTime = '11:00AM'
  console.log('Your bib number is #' + bibNumber + ' and you race at ' + startTime);
} else if (runnerAge < 18){
  startTime = "12:30PM"
  console.log('Your bib number is #' + bibNumber + ' and you race at ' + startTime);
} else {
  console.log('Please see the registration desk!');
}
