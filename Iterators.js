const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
  
  isTwoPlusTwo()
  
  console.log(isTwoPlusTwo.name)

  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val)
    if (checkA === checkB) {
        return checkA
    } else {
        return 'inconsistent results'
    }
    
  }
  
  console.log(checkConsistentOutput(addTwo, 4));

  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(element => {
    console.log(`I want to eat a ${element}`);
});

