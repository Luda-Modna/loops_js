function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this._age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.isUser = function (user) {
  return user instanceof User;
};

const user1 = new User(
  "Andriy",
  "Sheva",
  25,
  true,
  "useremail@gmail.com",
  true
);

//class

class UserClass {
  constructor(name, surname, age) {
    //function-constructor
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("NaN");
    }
    if (value < 0 || value > 150) {
      throw new RangeError("age must be between 0 and 150");
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }
  getFullNameClass() {
    //prototype
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(user) {
    // static metod
    return user instanceof UserClass;
  }
}

try {
  const user2 = new UserClass("Andriy", "Sheva", 25);
  console.log(user2.getFullNameClass());
  console.log(user2.age);
  user2.age = 50;
} catch (err) {
  console.log(err);
}

class Phone {
  constructor(brand, model, color, price, yearOfRelease) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.yearOfRelease = yearOfRelease;
  }
  calcAgePhone() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfRelease;
  }
}

const phone1 = new Phone("Apple", "XS", "white", 999, 2018);
console.log(phone1.calcAgePhone());
