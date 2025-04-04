//1
const mapArr = new Map([
  [1, "first"],
  [3, "third"],
]);
console.log(mapArr.size);

mapArr.set("name", "Test");
mapArr.delete(1);

console.log(mapArr.has(3));
console.log(mapArr.has(2));

console.log([...mapArr.keys()]);
console.log([...mapArr.values()]);

//2
const dictionary = new Map();
dictionary.set("1", "first").set("3", "third");

function numbersIntoOriginalNumbers(textOfNumbers) {
  return textOfNumbers
    .split(" ")
    .map((n) => (dictionary.has(n) ? dictionary.get(n) : n))
    .join(" ");
}

const textOfNumbers =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";
const textOfOriginalNumbers = numbersIntoOriginalNumbers(textOfNumbers);
console.log(textOfOriginalNumbers);
