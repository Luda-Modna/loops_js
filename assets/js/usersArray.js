function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
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

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

const usersNotSubscribed = users.filter((u) => u.isSubscribed === false);

users.forEach((u) => console.table(u.getFullName()));

const arrayOfSchoolAgeWomen = users.filter((u) => {
  if (u.isMale === true && u.age > 6 && u.age < 18) {
    console.table(u.getFullName());
  }
});

const foundUserEmail5 = users.findIndex(
  (u) => u.email === "useremail5@gmail.com"
);
const deletedUser = users.splice(foundUserEmail5, 1);

const newEmail = users.findIndex((u) => {
  if (u.id === 2) {
    u.email = "test@test.com";
  }
});

const sbscrbdUsers = users.filter((u) => u.isSubscribed === true);
const precentage = (sbscrbdUsers.length / users.length) * 100;
console.log(`${Math.trunc(precentage)}% - subscribed users`);

const totalAge = users.reduce((sum, u) => sum + u.age, 0);
const averageAge = totalAge / users.length;
