// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
// Output of the above logs:
// true
// true

// Avoid this conversoin:
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 1);
// Output of the above logs:
// false
// false
// true

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 1);
// Output of the above logs:
// false
// false
// false

// Strict Check: 
// ===
console.log("2" === 2);
