const numbersSet = new Set([1, 2, 3]);

numbersSet.has(3);
numbersSet.has(4);

numbersSet.add(6).add(9);

for (const element of numbersSet) {
  console.log(element);
}

const sum = [...numbersSet].reduce((accum, num) => accum + num);

numbersSet.delete(2);
numbersSet.clear();

//2. З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const arr = [1, 6, 9, 4, 9, 1, 5, 6];
const arrFromSet = [...new Set(arr)];

//З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.

const arrNum1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arrNum2 = [5, 10, 11];
const arrNumbers = [...new Set([...arrNum1, ...arrNum2])];

//3.
const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

const nameUsers = [...new Set(messages.map((u) => u.name))];

const userMap = new Map();
nameUsers.forEach((name) => {
  const userMessage = messages
    .filter((m) => m.name === name)
    .map(({ message, date }) => ({
      message,
      date,
    }));
  userMap.set(name, userMessage);
});


