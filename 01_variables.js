// Concpet of variables 
// let, const and var 

const accountId = 144553;

let accountEmail = 'umair@google.com';

var accountPassword = '12345';

accountCity = 'pakistan';

let accountState;

// Check out  Change the above declared variable 


// accountId = 2  // not allowed
// console.log(accountId) // shows an error >>  TypeError: Assignment to constant variable. 

accountEmail = 'ua@ua.com';
console.log(accountEmail);

accountPassword = 212121;
console.log(accountPassword);

accountCity = 'UAE';

console.log(accountCity)


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// Summary of this class

// Lecture  # 1:
// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])

/*
Prefer not to use var
because of issue in block and functional scope
*/