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