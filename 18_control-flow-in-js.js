// Topic Control flow in js

// if

// if (true) {
//  console.log("code executed");
// }

// if (false) {
//  console.log("code not executed");
// }

// if (true) {

// }else if (false) {

// }else if (false) {

// }else{

// }

// swith case

const month = 3;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    // console.log("march");
    break;
  case 4:
    console.log("aprail");
    break;

  default:
   console.log("hello");
    break;
}


// agr break key word nahi ho ga to jo condition match kre gi wo bhi or os ke bad jitna code ho ga sub executed ho jay ga 
// except default mai jo code likha ho ga wo nahi ho ga 




const monthCheck = 'august';

switch (monthCheck) {
  case "jan":
    console.log("january");
    break;
  case "feb":
    console.log("febuary");
    break;
  case "march":
    console.log("march");
    break;
  case "august":
    // console.log("august"); 
    break;
case "aprail":
    console.log("aprail");
    break;
case "june":
    console.log("june");
    break;

  default:
   console.log("hello");
    break;
}


// _____X_________X______

// truthy and falsey value 

// const userEmail = "umair123@gmail.com"  // truthy
// const userEmail = ""  // falsey
// const userEmail = [1,2,3,4,5] // truthy
// const userEmail = [] // truthy
// const userEmail = {name:"umair"} // truthy
// const userEmail = {} // truthy
// const userEmail = undefined // falsey
// const userEmail = null // falsey
// const userEmail = 0 // falsey
// const userEmail = false // falsey
// const userEmail = 1 // truhy
// const userEmail = true // truhy
// const userEmail = Symbol // truhy
// const userEmail = BigInt(0n) // falsey
// const userEmail = NaN // falsey
// const userEmail = NaN // falsey
// const userEmail = -3 // truthy 



// if (userEmail) {
//   console.log("Got user email");
// }else {
//   console.log("Don't have user email");
// }


// trurthy
// string with some value, "0","false"," ",[],{}, function(){}

// falsey values
// empty string"",0,-0,BigInt(0 n) false,null,undefined,NAN


// dedect and check empty array and empty object 

let arr = []
if (arr.length ===0) {
  
  // console.log('array is empty');
}


let obj = {}
if (Object.keys(obj).length ===0) {
  // console.log('object is empty')
}


// nullish coalescing operator (??) : null undefined
// agr null or undefined ho ga to  jo is  ?? operator ke bad likha ho ga wo print ho ga 
// other wise agr dono side pr number ho ga to phele wala number print ho jay ga  
let val1;
// val1= 5 ?? 10
// val1= 25 ?? 20
val1= null ?? 20
val1= undefined ?? 30

val1=null ??10??20
val1=undefined ??30??20
console.log(val1) // 30


// Ternoary operator

// condition? true:false

let testMarks = 100;

// console.log(testMarks>50? "pass":"fail")

