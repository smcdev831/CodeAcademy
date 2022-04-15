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

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(word => {
    return word[0]
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(numbers => {
    return numbers / 100
});


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(numbers => {
    if (numbers < 250) {
        return true
    }
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(words => {
    if (words.length > 7) {
        return true
    }
})