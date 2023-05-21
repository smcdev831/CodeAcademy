invalidCards = [];
function validateCred(arr) {
  newArr = arr.slice(0, -1).reverse();
  total = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      if (newArr[i] * 2 > 9) {
        total += newArr[i] * 2 - 9;
      } else {
        total += newArr[i] * 2;
      }
    } else {
      total += newArr[i];
    }
  }
  if ((total + arr.pop()) % 10 === 0) {
    console.log("Valid");
  } else {
    console.log("Invalid");
    invalidCards.push(arr);
  }
}

function findInvalidCards(batch) {
  for (let i = 0; i < batch.length; i++) {
    validateCred(batch[i]);
  }
}

findInvalidCards(batch);
console.log(invalidCards);
