const months = ["January", "February", "Martch"];

//const users = [
//  { id: 1, name: "Test", age: 20 },
//  { id: 2, name: "Ivo", age: 23 },
//];

//for (let i = 0; i < users.length; i++) {
//console.log(users[i]);
//}

document.write(`<ul>`);
for (let i = 0; i < months.length; i++) {
  document.write(`
    <li>${months[i]}</li>
    `);
}
document.write(`</ul>`);

const numbers = [11, 40, -8, 20, 55];

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//console.log(sumArray(numbers));

function ageUsers(age) {
  let sum = 0;
  for (let i = 0; i < age.length; i++) {
    sum += age[i].age;
  }
  return sum / age.length;
}

//console.log(ageUsers(users));

//for (const element of months) {
// console.log(element);
//}

//const numElements = +prompt("enter the number of array elements:");
//const inputElements = [];

//for (i = 0; i < numElements; i++) {
//  const number = prompt(`enter a number ${i + 1}`);
//  inputElements.push(number);
//}
//console.log(inputElements);

const months2 = [
  "January",
  "February",
  "Martch",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const a = [...months2.splice(11), ...months2.splice(0, 2)];
//console.log(a);

//console.log(months2);

//forEach

const arr100 = [1, 2, 3];

//function printItem(item, index, array) {
//  console.log(`item ${index} = ${item}`);
//  console.log(array);
//}
//arr100.forEach(printItem);

//map

function toSqr(item) {
  return -item;
}

const arr100Mapped = arr100.map(toSqr);
console.log(arr100Mapped);

//отримати масив імен
const users = [
  { id: 1, name: "Test", age: 20 },
  { id: 2, name: "Ivo", age: 15 },
];

function getName(user) {
  return user.name;
}

const nameUsers = users.map(getName);
console.log(nameUsers);

//filter

const arr200 = [1, 5, -10, 16, 0, 9];

function isOdd(item) {
  return item % 2 === 1;
}

const arrOdd = arr200.filter(isOdd);

function isAdult(userAge) {
  return userAge.age >= 18;
}

const adultUsers = users.filter(isAdult);
console.log(adultUsers);

//findIndex

function isSixsteen(item) {
  return item === 16;
}

const fundIndex = arr200.findIndex(isSixsteen);
console.log(fundIndex);
