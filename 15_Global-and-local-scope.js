// Topic : Global and local scope in js
// if (true) {
//  let a = 10;
//  let b = 20;
//  var c = 30;
 
// }

// console.log(a); //   a is not defined
// console.log(b);  //  b is not defined
// console.log(c);  //  30 



// global scope mai agr koi variable h to wo block scope  mai access ho jay gi
// agr block scope mai ek variable h to wo global scope mai access nahi ho gi 


let a = 300;

if (true) {
 let a = 10;
 let b = 20;
 var c = 30;
 
 console.log("Inner ",a)
}

console.log("Outer ",a)