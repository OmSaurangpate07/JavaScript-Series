// Primitive:

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId);
// Output: false

// BigInt
const bigNumber = 4902490832479324039840n

// Reference type (Non primitive):
// Arrays, Objects, Functions

// Arrays
const heros = ["Shaktiman", "IronMan", "Batman"]

// Objects
const user = {
    name: "Om",
    age: 22
}

// Functions
const myFunc = function() {
    console.log("Hello");
}

console.log(typeof heros); // function object

// Datatypes and their types (Primitive):
// String => string
// Number => number
// BigInt => bigint
// undefined => undefined
// null => object
// Symbol => symbol


// Datatypes and their types (Non-Primitive):
// Arrays => object
// Object => object
// Function => function object
