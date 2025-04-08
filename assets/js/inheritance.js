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
console.log(moderator.getFullNameClass());

moderator.sendMessage(user, "Hello");

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
sq.eat("apple");
sq.run();

const flyingSq = new FlyingSquirrel("Elvin", 3);
flyingSq.eat()
flyingSq.fly()
