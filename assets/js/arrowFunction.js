//стрілочна функція
const arrow = (a, b) => {
  return a + b;
};

console.log(arrow(4, 5));

//isAdult
const isAdult = (age) => age >= 18;

console.log(isAdult(18));

//greeting

const greetingObj = {
  en: "Hello",
  ua: "Вітаю",
};

const greeting = (lang, userName) => `${greetingObj[lang]}, ${userName}!`;

console.log(greeting("ua", "Анна"));
console.log(greeting("en", "Max"));
