const user = {
  fName: "Max",
  lName: "Test",
};

for (const key in user) {
  console.log(`user{${key}} = ${user[key]}`);
}

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user1 = new User("Ftest", "lTest", 20, true, "t@t.com", true);

//for (let key in user1) {
//  console.log(key);
//}

//1
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}

//2
console.log(Object.keys(user1));

Object.keys(user1).forEach((uKey) =>
  console.log(`user ${uKey} = ${user1[uKey]}`)
);

const phone = {
  brand: "iPhone",
  model: "XS",
  age: 5,
};

console.log(Object.keys(phone));
console.log(Object.values(phone));
