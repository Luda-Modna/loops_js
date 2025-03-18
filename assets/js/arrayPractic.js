function Phone(id, brand, model, makeYear, color, isNfc, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}

const phones = [];
const PHONES_COUNT = 100;

for (let i = 0; i < PHONES_COUNT; i++) {
  const phone = new Phone(
    i + 1,
    Math.random() > 0.5 ? "Sampsung" : "IPhone",
    `Series${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? "white" : "black",
    Math.random() > 0.5,
    5000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

console.table(phones);

//відібрати телефони дороще 8000

const phones8000 = phones.filter((item) => item.price > 8000);
//console.table(phones8000);

//відібрати телефони 2018 mY
const phones2015MakeYear = phones.filter((item) => item.makeYear === 2018);
//console.table(phones2015MakeYear);

// вивести бренд, модель і рік випуску у консоль
//phones.forEach((p) => console.log(`${p.brand}: ${p.model} ${p.makeYear}`));

// видаляємо телефон з id 10
const foundIndex = phones.findIndex((p) => p.id === 10);

if (foundIndex !== -1) {
  phones.splice(foundIndex, 1);
}

//отримати масив з телефонами ціна яких нижча на 5% від вихідної
const salePhones = phones.map((p) => {
  const phoneCopy = { ...p };
  phoneCopy.price = Math.round(phoneCopy.price * 0.95);
  return phoneCopy;
});
console.table(salePhones);

//вивести бренд + модель телефонів з nfc

phones
  .filter((p) => p.isNfc)
  .forEach((p) => console.log(`${p.brand} ${p.model} - ${p.isNfc}`));

//вивести дані про моделі айфон 2016

phones
  .filter((p) => p.brand === "IPhone" && p.makeYear === 2016)
  .forEach((p) => console.log(`${p.brand}: ${p.model} - ${p.makeYear}`));

//every, some
//перевірити, чи є золоті телефони

phones.some((p) => console.log(p.color === "gold"));

//перевірити, чи всі телефони пізніше 2013 року випуску

phones.every((p) => console.log(p.makeYear < 2013));

//дізнатись, чи всі білі телефони з nfc

phones.every((p) => console.log(p.color === "White" && p.isNfc));
