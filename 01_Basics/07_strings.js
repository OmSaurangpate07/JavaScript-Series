const name = "Hitesh";
const repoCount = 4;

// console.log(name + repoCount + " Value");

/* 
String Interpolation:-
Recommended Syntax to write string in javascript - `` backticks 
*/
// Syntax of String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Counter App");
console.log(gameName);

const str1 = new String();
console.log(str1.__proto__);

// Methods of String:
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(3)); // char at index
console.log(gameName.indexOf("t")); // Index of char

console.log(gameName.substring(0, 7)); // Slice
console.log(gameName.slice(-11, 7)); // Output: Counter

const newString = "    Hitesh.    ";
console.log(newString);
console.log(newString.trim()); // trim() Removes blank spaces. It majorly use to make forms input.

// Replace
const url = "https://hitesh.com/hitesh20%choudhary";
console.log(url.replace('20%', '-'));

console.log(url.includes("hitesh"));
console.log(url.includes("om"));

console.log(gameName.split('')); // converts string in array
