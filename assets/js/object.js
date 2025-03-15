//1
const customer = {
  firstName: "Jane",
  lastName: "Doe",
  email: "test@test.com",
  phoneNumber: +380111111111,
  address: {
    city: "Lviv",
    street: "T.Shevchenka",
    house: 2,
    apartment: 33,
  },
  getFullAddress() {
    return `${this.address.city}, street ${this.address.street} ${this.address.house}/${this.address.apartment} `;
  },
  changePhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  },
};

console.log(customer);

const customerFullAddress = customer.getFullAddress();
console.log(customerFullAddress);

customer.changePhoneNumber(+380000000000);
console.log(customer);

customer.isMale = true;
console.log(customer.isMale ? "male" : "female");

delete customer.address;
console.log(customer);

const customer2 = Object.assign({}, customer);
console.log(customer2 === customer);

const customer3 = { ...customer };
console.log(customer3 === customer);

//2
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (let key in cat) {
  console.log(key);
}

//3
function Book(author, title, yearOfPublication, publisher, price) {
  this.author = author;
  this.title = title;
  this.publication = yearOfPublication;
  this.publisher = publisher;
  this.price = price;
}

const book1 = new Book("St.King", "It", 1986, "KSD", "10 usd");
console.log(book1);


Book.prototype.ageBook = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.publication;
};

Book.prototype.changePrice = function(newPrice) {
this.price = newPrice;
}

console.log(`Book ${book1.title} ${book1.author} ${book1.ageBook()} years old `)
