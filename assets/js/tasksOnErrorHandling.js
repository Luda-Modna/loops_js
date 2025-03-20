/*1. Для рекурсивної функції піднесення числа до степеня pow(base, exponent) 
реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
Виклик функції вкласти в блок try з відловом виняткових ситуацій 
(помилок) різних типів з оповіщенням користувача про тип помилки.*/

function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("NaN");
  }
  if (base === 0 && exponent < 0) {
    throw new RangeError("0 can't be made negative exponent");
  }
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
  return base * pow(base, exponent - 1);
}

try {
  console.log(pow(3, 5));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("NaN");
  } else if (err instanceof RangeError) {
    console.log("RangeError handling: 0 can't be made negative exponent");
  } else {
    console.log(err);
  }
}

/*2. *Реалізувати функцію для валідації імейлу. Імейл має бути рядком 
і містити символ "@", 
цей символ не має бути першим або останнім. Функція має повертати 
відвалідований імейл або викидати помилку, якщо імейл не валідний.*/

function validEmail(email) {
  if (
    typeof email === "string" &&
    email.includes("@") &&
    !email.startsWith("@") &&
    !email.endsWith("@") &&
    email.endsWith(".com")
  ) {
    return email;
  } else if (typeof email !== "string") {
    throw new TypeError("email can't be a string");
  } else {
    throw new Error("email is not valid");
  }
}

try {
  console.log(validEmail('test@test.com'));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("TypeError handling: email can't be a string");
  } else {
    console.log("email is not valid");
  }
}
