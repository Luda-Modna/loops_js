const map1 = new Map();
console.log(map1);

//arr.leangth
console.log(map1.size);

//obj.key => value
//щоб потім повернути значення об'єкта треба винести його в змінну
const user = { id: 1, name: "Ivo" };

map1.set("firstName", "Ivo").set("lastName", "Test");

map1.set(user, ["hello", "friend"]);
console.log(map1);

//obj.key
//повертає зачення ключа

console.log(map1.get("firstName"));
console.log(map1.get(user));

//obj in key
//перевіряє чи є такий ключ, повертає true/false

console.log(map1.has("lastName"));

//delete obj.key

const m1 = new Map();
m1.set("Test1", "+380123456789")
  .set("Test2", "+380123456788")
  .set("Test3", "+380123456787");

console.log(m1.delete("Test1"));

//m1.clear()

//forEatch
m1.forEach((value, key) => console.log(key, value));

//m1.keys()
const map1Keys = [...m1.keys()];
console.log(map1Keys);

//m1.values()
console.log([...m1.values()]);

//створити мапу з об'єктів
const obj = {
  Test: "+380987654321",
  Test2: "+380987654322",
};

console.log(Object.entries(obj));
const m2 = new Map(Object.entries(obj));

//
const vocabulary = new Map();
vocabulary.set("dog", "собака").set("cat", "кіт").set("run", "бігати");

//function translateEngToUa(engPhrase) {
//отримати масив англ слів
// const engWotds = engPhrase.split(" ");
//отримати значення
// const uaWords = engWotds.map((w) =>
//  vocabulary.has(w) ? vocabulary.get(w) : w
//);
//отримати рядок
// const uaPhrase = uaWords.join(" ");
// return uaPhrase;
//}

//спрощений варіант
function translateEngToUa(engPhrase) {
  return engPhrase
    .split(" ")
    .map((w) => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(" ");
}

const engPhrase = "dog run white cat";
const ukrPhrase = translateEngToUa(engPhrase);
console.log(ukrPhrase);
