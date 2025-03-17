
//сума

function sum(...sumands) {
  function howToReduce(accum, item) {
    return (accum += item);
  }
  const sum = sumands.reduce(howToReduce);
  return sum;
}

const res1 = sum(1, 2, 3, 4, 5, 6);
console.log(res1);

//якщо додаємо то обраховується сума
//якщо множимо то добуток

function calc(a, ...commands) {
  function calcComm(accum, item) {
    if (a === "+") {
      return (accum += item);
    } else if (a === "*") {
      return (accum *= item);
    } else {
      return null;
    }
  }
  const result = commands.reduce(calcComm);
  return result;
}

const res2 = calc("*", 1, 2, 3, 4, 5, 6);
console.log(res2);

//привіт + ім'я користувача

function greet(greetings, ...names) {
  let hey = "";
  for (let i = 0; i < names.length; i++) {
    hey += greetings + ", " + names[i] + "! ";
  }
  return hey;
}

const greetingsUsers = greet("Hey", "Anna", "Max", "Vita");
console.log(greetingsUsers);

//знайшла найбільші числа

function findMax(...num) {
  return Math.max(...num);
}

console.log(findMax(1, 2, 9, 5));


//середнє арифметичне

function average(...numbers) {
  function sumNumber(accum, item) {
    return (accum += item);
  }
  const sum = numbers.reduce(sumNumber);
  return sum / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5, 15));

//виведення категорій і продуктів

function listItems(category, ...products) {
  let res1 = `Category: ${category}.`;
  let res2 = ` Products: ${products}.`;

  const result = res1 + res2;
  return result;
}

console.log(listItems("Fructs", "Apple", " Banana", " Orange"));
console.log(listItems("Drinks", "Tea", " Coffee"));

//ввиведення парних чисел

function filterEven(...num1) {
  let evenNumb = [];
  for (let i = 1; i < num1.length; i++) {
    if (num1[i] % 2 === 0) {
      evenNumb.push(num1[i]);
    }
  }
  return evenNumb;
}

console.log(filterEven(1, 2, 3, 4, 5, 6));
