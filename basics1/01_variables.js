const accountId = 12345
let accountEmail = "taimur@gmail.com"
var accountPass = 112233
accountCity = "peshawar"

let accountState;

/*
prefer not to use "var"
because there is issues in block scope and func scopes
*/

accountEmail = "boss@ggmail.com"

console.log(accountId);

console.table([accountEmail, accountPass, accountCity, accountState]);
