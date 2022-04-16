let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

let spaceship = {
homePlanet: 'Earth',
color: 'silver',
'Fuel Type': 'Turbo Fuel',
numCrew: 5,
flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew
let planetArray = spaceship.flightPath

let spaceship = {
'Fuel Type' : 'Turbo Fuel',
'Active Mission' : true,
homePlanet : 'Earth', 
numCrew: 5
};

let propName =  'Active Mission';
let isActive = spaceship.propName

console.log(spaceship[propName]);

let spaceship = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth',
color: 'silver',
'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'
spaceship.numEngines = 7

delete spaceship['Secret Mission']

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}

alienShip.retreat()
alienShip.takeOff()

let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 

  let capFave = spaceship.crew.captain['favorite foods'][0]

  spaceship.passengers = [{name: 'John'}, {name: 'Maria'}, {name: 'Karyn'}]

  let firstPassenger = spaceship.passengers[0]

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };

   let greenEnergy = obj => {
     obj['Fuel Type'] = 'avocado oil'
   }
  
   let remotelyDisable = obj => {
     obj.disabled = true
   }
  
   greenEnergy(spaceship)
   remotelyDisable(spaceship)
  
   console.log(spaceship)

   let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
  };
  
  for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
  };

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}. `
    }
  };

  console.log(robot.provideInfo())

  const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

  const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high'
  
  robot.recharge()
  
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };

  console.log(robot.energyLevel)

  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  
  robot.numOfSensors = 100

  console.log(robot.numOfSensors)

  