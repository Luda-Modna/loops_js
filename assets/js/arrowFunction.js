function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const sumArgs = sum(1, 2, 3, 4, 5, 6);
console.log(sumArgs);

function result() {
  let production = 1;
  for (let i = 0; i < arguments.length; i++) {
    production *= arguments[i];
  }
  return production;
}

const resultArgms = result(1, 2, 3);
console.log(resultArgms);

//operation - може бути + або * і в залежності 
// елементи функції виконують ту чи іншу операцію

function calculate(operation) {
  let accum;
  if (operation === "+") {
    accum = 0;
    for (let i = 1; i < arguments.length; i++) {
      accum += arguments[i];
    }
  } else if (operation === "*") {
    accum = 1;
    for (let i = 1; i < arguments.length; i++) {
      accum *= arguments[i];
    }
  } else {
    return undefined;
  }
  return accum;
}

const resultCalc = calculate("+", 1, 2, 3, 4);
console.log(resultCalc);
