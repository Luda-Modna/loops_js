function strInicials(name) {
  const spaceIndex = name.indexOf(" ");
  return name[0] + name.slice(spaceIndex + 1, spaceIndex + 2);
}
console.log(strInicials("Ivo Test"));


const inicials = (fName, lName) => `${fName[0]}${lName[0]}`;
console.log(inicials("Max", "Melnyk"));
