const accountId = 144553;
let accountEmail = "om@dev.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 4; // not allowed
// console.log(accountId);

accountEmail = "hitesh@lco.com";
accountPassword = "21214";
accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var,
Because of issue in block scope and functional scope
*/
