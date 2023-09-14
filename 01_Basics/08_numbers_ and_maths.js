const score = 400;
console.log(score);

const balance = new Number(700);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Output will be upto 2 decimals

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));


// ****************** Maths ******************
console.log(Math);
console.log(Math.abs(-4)); // Negative value converts into positive

// console.log(Math.round(4.6)); // Output is 5
// console.log(Math.ceil(4.4)); // Output is 5
// console.log(Math.floor(4.4)); // Output is 4
// console.log(Math.min(4, 4, 7, 3)); // Output is minimum number in the array
// console.log(Math.max(4, 4, 7, 3)); // Output is maximum number in the array

console.log(Math.random()); // Random values 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Important
