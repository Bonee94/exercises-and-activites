// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Boat` class that extends the `Vehicle` class

class Boat extends Vehicle {
  constructor(passengersLimit, boatName, type, passengers) {
    const name = boatName;
    const wheelCount = 0;
    const sound = 'bwom';
    const boatType = type;
    const passengersList = passengers;


    super(name, wheelCount, sound);
  }

}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, "The Boss", 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
