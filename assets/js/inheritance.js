class User {
  constructor(name, surname, age, isMale, email) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this._isBanned = false;
  }
  getFullNameClass() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Test", "Testovych", 20, true, "test@mail.com");

class Moderator extends User {
  constructor(name, surname, age, isMale, email, permissions) {
    super(name, surname, age, isMale, email);
    this._permissions = permissions;
  }
  getFullNameClass() {
    return `Mr. ${this.firstName} ${this.lastName}`;
  }
  sendMessage(user, message) {
    console.log(
      `Moderator ${this.firstName} send message "${message}" to user ${user.firstName}`
    );
  }
}

const moderator = new Moderator("Mod", "Modovych", 30, false, "mod@mail.com", {
  bann: false,
  readPrivate: false,
  sendMessage: true,
});

//moderator.sendMessage(user, "Hello");

class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permissions, category) {
    super(name, surname, age, isMale, email, permissions);
    this.category = category;
  }
  bann(user) {
    user._isBanned = true;
  }
  unbann(user) {
    user._isBanned = false;
  }
}

const admin = new Admin("Max", "Min", 18, true, "admin@mail.com", {}, 1);

//
class Squirrel {
  constructor(name) {
    this._name = name;
  }
  eat(food) {
    console.log(`Squirrel ${this._name} eat a ${food}`);
  }
  run() {
    console.log(`Squirrel ${this._name} running`);
  }
}

class FlyingSquirrel extends Squirrel {
  constructor(name, length) {
    super(name);
    this._length = length;
  }
  eat() {
    console.log(`Squirrel ${this._name} eat a nuts`);
  }
  fly() {
    console.log(`Squirrel ${this._name} flying on ${this._length}m`);
  }
}

const sq = new Squirrel("Simon");

const flyingSq = new FlyingSquirrel("Elvin", 3);

//абстрактний клас - клас без реалізації

class Figure {
  constructor(name) {
    this.name = name;
  }
  getArial() {
    return null;
  }
}

class Square extends Figure {
  constructor(sideLenght) {
    super("square");
    this.sideLenght = sideLenght;
  }
  getArial() {
    return this.sideLenght * this.sideLenght;
  }
}

const square = new Square(6);

class Rectangle extends Figure {
  constructor(sideLenght, sideWidtch) {
    super("rectangle");
    this.a = sideLenght;
    this.b = sideWidtch;
  }
  getArial() {
    return this.a * this.b;
  }
}

const rectangle = new Rectangle(10, 20);

function calcAria(fig) {
  if (fig instanceof Figure) {
    return fig.getArial();
  }
  console.log("fig isn't a figure");
}

