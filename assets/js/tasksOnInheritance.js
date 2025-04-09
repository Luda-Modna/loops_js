class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.manufactureDate.getFullYear();
  }
  getFullInfo() {
    return ` ${this.brand} ${this.model} age: ${this.age}`;
  }
}

const car = new Vehicle(
  { lenght: 4, width: 2, height: 3 },
  "Mercedes",
  "Benz",
  new Date(2016, 2, 6)
);

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    return this.passengerCount < this.passengerLimit
      ? (this.passengerCount++, true)
      : false;
  }
  getFullInfo() {
    return ` ${this.brand} ${this.model} age: ${this.age}, max number of passengers: ${this.passengerLimit}`;
  }
}

const passengerCar = new PassengerTransport(
  { lenght: 3, width: 2, height: 4 },
  "BMW",
  "X5",
  new Date(2018, 0, 20),
  20,
  19
);

console.log(car.getFullInfo());
console.log(passengerCar.getFullInfo());

console.log(passengerCar.addPassenger());
console.log(passengerCar.passengerCount);
console.log(passengerCar.addPassenger());
console.log(passengerCar.passengerCount);
