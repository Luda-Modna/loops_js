//Деструктуроване присвоєння

//Імена змінних мають співпадати з іменами
// властивостей обєкта

//1 спосіб - в тілі функції ми задаємо змінну,
//яка в {властивості} буде тягнути значення
// з певного об'єкта = об'єкт, який використовуємо

function f(user) {
  const { fName, lName, age } = user;
  console.log(fName);
}

const user = {
  fName: "Test",
  lName: "Testovych",
  age: 25,
};

f(user);

//2 спосіб - вказуємо що функція,
// як аргумент буде приймати властивості обєкта - ({}),
//а в тілі буде видавати нам значення об'єкта

function car({ brand, model, age }) {
  console.log(model);
}

const car1 = {
  brand: "BMW",
  model: "C5",
  age: 5,
};

car(car1);

//

const book = {
  author: "Austred Lingren",
  title: "Karlson",
};

const { author, title } = book;

// коли в змінні є об'єкт з вкладеними об'єктами то
//щоб предати їх змінній треба властивість : властивість
//передається значення. " : " тут синтаксис перейменуванняб
//замість автора ми тепер використовуємо його властивості

const bookUa = {
  author: {
    fName: "Lina",
    lName: "Kostenko",
  },
  price: 220,
};

const {
  author: { fName, lName },
  price,
} = bookUa;

//default value
function d({ fName, lName, isMale = false }) {
  console.log(isMale);
}
const userDefoult = {
  fName: "Test",
  lName: "Testovych",
};

d(userDefoult);

//Array
//головне порядок

const arr = [1, 2, 3, 4];
const [arr0, arr1, arr2, arr3] = arr;

console.log(arr3);

const user1 = {
  name: "Ivo",
  age: 23,
  emails: ["test@test.com", "test@gmail.com"],
  isMale: true,
};

const {
  name: userName,
  age: userAge,
  emails: [email1, email2],
  isMale,
} = user1;

//rest
const attr = { id: "btn", style: "color:blue", title: "hello" };

const { style, ...restAttr } = attr;

const { name, ...restValue } = user1;


