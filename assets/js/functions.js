//1
function isWorkingAgePerson(age) {
  return age ? age >= 16 && age <= 64 : age <= 16 && age >= 64;
}
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

//2
const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

//3
const isTheareATriangle = function (a, b, c) {
  return isTheareATriangle
    ? a + b > c && a + c > b && b + c > a
    : a < 0 || b < 0 || c < 0;
};

console.log(isTheareATriangle(3, 3, 3));
console.log(isTheareATriangle(3, 20, 3));
console.log(isTheareATriangle(3, 4, 0));

//4
//Площа трикутника
function areasOfTheTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Такого трикутника не існує";
  }
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(areasOfTheTriangle(9, 9, 5));

//Площа прямокутника
function areasOfARectangle(a, b) {
  if (a === b) {
    return "Такого прямокутника не існує";
  }
  return a * b;
}

console.log(areasOfARectangle(4, 5));

//5
function isASimpleNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isASimpleNumber(4));
console.log(isASimpleNumber(11));
