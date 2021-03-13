// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
// A color property.

// A passengers property, which will hold an array of strings.

// A useHorn() method that prints the car's sound to the console.

// A checkPassengers() method that checks whether there are fewer than four passengers.
// Inherits id, numberOfWheels, and sound from the Vehicle class, with numberOfWheels set as 4 and sound set as beep.

class Car extends Vehicle {
  constructor(id ,color, passengers ) {

    super(id, wheels, sound);
    this.color = color;
    this.carPassengers = carPassengers;
  }
  useHorn (){}
  checkPassengers() {}

}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
