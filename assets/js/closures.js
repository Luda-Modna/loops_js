function counter() {
  let i = 0;

  return function () {
    return ++i;
  };
}

const counter1 = counter();

function customCounter1(num) {
  let i = 0;
  return function () {
    i += num;
    return i;
  };
}

const myCounter = customCounter1(5);
const result1 = myCounter(); // => 5
const result2 = myCounter(); // => 10
const result3 = myCounter(); // => 15

function customCounter2(accum, num) {
  return function () {
    accum += num;
    return accum;
  };
}

const myCounter2 = customCounter2(1, 5);
const resultMyCounter1 = myCounter2(); // => 6
const resultMyCounter2 = myCounter2(); // => 11
const resultMyCounter3 = myCounter2(); // => 16
