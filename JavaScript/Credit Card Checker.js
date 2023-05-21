function validateCred(arr) {
  newArr = arr.slice(0, -1).reverse();
  total = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      total += newArr[i];
    } else {
      if (newArr[i] * 2 > 9) {
        total += newArr[i] * 2 - 9;
      } else {
        total += newArr[i] * 2;
      }
    }
  }
  console.log(total + arr.pop());
}

validateCred([4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]);
