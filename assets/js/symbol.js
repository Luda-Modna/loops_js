//symbol для генерації унікальних значень

const THEMES = {
  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
};

const theme = THEMES.DARK;

switch (theme) {
  case THEMES.DARK:
    console.log(THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log(THEMES.LIGHT);
    break;
  default:
    console.log("unexpected value");
}

//Symbol.iterator

//1.for..of

//2.destruction
const [first, second] = [1, 2];
// + object(виняток)

//3.spread operation ... + rest

const arr = [1, 2, 3];
const arrCopy = [...arr];
// + object(виняток)

// argumens має Symbol.iterator

function sum() {
  const arrFromArguments = [...arguments];
  return arrFromArguments.reduce((accum, item) => accum + item);
}

console.log(sum(1, 2, 3, 4, 5));

//розпаковка масиву і передача його елементів в функцію

const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(...arr1));

//злиття об'єктів разом

const user1 = { firstName: "Max", lastName: "Min" };
const user2 = { isMale: true, age: 20 };

let user3 = { ...user1, ...user2 };

const newName = "Maxsym";
user3 = { ...user3, firstName: newName };

//

const users = [
  { id: 1, name: "Test1", age: 20, tel: "+380123456789" },
  { id: 2, name: "Test2", age: 30, tel: "+380123456788" },
  { id: 3, name: "Test3", age: 40, tel: "+380123456787" },
  { id: 4, name: "Test4", age: 50, tel: "+380123456786" },
];

user = { id: 2, tel: "+380223456789" };

const foundIndex = users.findIndex((u) => u.id === user.id);

console.log(foundIndex);

users[foundIndex] = { ...users[foundIndex], ...user};
