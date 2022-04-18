// 01. Using Object Literal
const student = {
    name: "Sakib-Al-Hasan",
    occupations: "Athletic",
};

// 02. Object Constructor
const person = new Object({
    name: "Shamim Reza",
    age: 31,
});

// 3. Object.create

// const human = new Object.create(null);
const human = Object.create(student);
// console.log(human.name);

// 4. Class Object
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const product1 = new Products("Lenovo", 35000);
const product2 = new Products("Mac Book Pro", 135000);
// console.log(product1);
// console.log(product2);

// 05. Syntactical Sugar - Function
function Book(name, price) {
    this.name = name;
    this.price = price;
}
const book = new Book("JavaScript", 580);
console.log(book);
