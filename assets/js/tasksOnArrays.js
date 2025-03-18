/*0 Створити числовий масив та проініціалізувати його (*випадковими числами).
1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
2 Вивести розмір масиву.
3 Зробити копію масиву.*/
// Не використовувати методи перебору масивів (forEach, filter, map, findIndex),
// а використати цикли

const numArrays = [
  Math.trunc(Math.random() * 30),
  Math.trunc(Math.random() * 50),
  Math.trunc(Math.random() * 40),
  Math.trunc(Math.random() * 20),
  Math.trunc(Math.random() * 30),
];

numArrays.pop();
numArrays.shift();
numArrays.unshift(Math.trunc(Math.random() * 20));
numArrays.push(Math.trunc(Math.random() * 30));

console.table(numArrays.length);

const numArraysCopy = [...numArrays];

//4 Вивести елементи з парними індексами.

for (let i = 0; i < numArrays.length; i += 2) {
  console.log(numArrays[i]);
}

//5 Знайти добуток елементів масиву.

function calcArray(arr) {
  let calc = 1;
  for (let i = 0; i < numArrays.length; i++) {
    calc *= arr[i];
  }
  return calc;
}

console.log(calcArray(numArrays));

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
//8 Отримати новий масив із заданого, який міститиме лише ненульові числа
// (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter

const numbers = [-1, 5, 0, 9, -10];
const nonZeroNums = numbers.filter((n) => n !== 0);

//9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного,
// поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map

const numbers2 = [99, 5, 0, 9, 30];
const numDividedBy100 = numbers2.map((n) => n / 100);

//10 Вивести елементи масиву, зведені у куб. // forEach

numbers2.forEach((n, index, arr) => (arr[index] = n ** 3));

//11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його,
// або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex

const numbers3 = [20, 30, 40, 2, 5, 10, 8, 9, 5, -6, 2];
const foundIndex = numbers3.findIndex((p) => p ** 2 === 100);

foundIndex !== -1
  ? numbers3.splice(foundIndex, 1)
  : console.log("такого елементу не існує");

//12 *Перевірити, чи всі елементи масиву є парними числами
// (* або простими числами). // every

console.log(numbers3.every((p) => p % 2 === 0));

//13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some

console.log(numbers3.some((p) => p < 0));
