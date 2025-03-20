function factorial(n) {
  if (typeof n !== "number") {
    throw new Error("NaN");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

try {
  console.log(factorial(4));
} catch (err) {
  console.log(err);
}

function validName(name) {
  if (typeof name !== "string") {
    throw new TypeError("name must be string value");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("name must be min 4 max 32 characters");
  }
  return name;
}

try {
  console.log(validName(44));
} catch (err) {
  console.log(err);
}

function adultAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("NaN");
  }
  if (age < 18) {
    throw new RangeError("NOT ADULT");
  }
  return age;
}

try {
  console.log(adultAge(18));
} catch (err) {
  console.log(err);
}
