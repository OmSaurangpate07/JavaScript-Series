let score = "33"
// let score = null
// let score = undefined
// let score = true
// let score = "Hitesh"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// After conversion the type will be number but the output is as follows:
// let score = 
// Output after conversion:
// "33" => 33
// "33abc" => NaN
// undefined => NaN
// "Hitesh" => NaN
// true => 1; false => 0


// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Om"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// After conversion the type will be number but the output is as follows:
// let isLoggedIn = 
// Output after conversion:
// 1 => true; 0 => false
// "" => false
// "Om" => true


let someNumber = 34
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// **************** Operations ****************
let value = 4
let negativeValue = -value
// console.log(negativeValue);
// Output: -4

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = " Om"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + "2");
// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// Output of the above logs:
// 12
// 12
// 12
// 122
// 32


// console.log(true)
console.log(+true)
// console.log(true+)
console.log(+"")
// Output of the above logs:
// true 
// 1
// error
// 0


let num1, num2, num3
num1 = num2 = num3 =  2 + 2


// *********** Increment and Decrement ***********
let gameCounter = 100
// gameCounter++ //postfix value
++gameCounter //profix value
console.log(gameCounter)

// Post Increment
// let firstNumber = 4;
// const secondNumber = firstNumber++;

// Pre Increment
// let firstNumber = 4;
// const secondNumber = ++firstNumber;

// Post Decrement
// let firstNumber = 4;
// const secondNumber = firstNumber--;

// Pre Decrement
let firstNumber = 4;
const secondNumber = --firstNumber;
console.log(`${firstNumber} and ${secondNumber}`);