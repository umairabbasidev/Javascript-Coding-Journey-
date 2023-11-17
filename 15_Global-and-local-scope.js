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

  // console.log("Inner ",a)
}

// console.log("Outer ",a)

// _____X___X____

/// nested scope

function one() {
  const username = "umair";

  function two() {
    const website = "youtube";
    console.log(username);
   }
   // console.log(website); // website is not defined eg: chotta bare se icecream mag sakta h or bara chote se icecream ni mag sakta analogy . fun two chote h or wo one se icecream mag sakta h 

  // two();
}

// one();


if (true) {
 const username = "umair"

if (username==="umair") {
 const website = " youtube"
 // console.log(username + website)
}
// console.log(website)  //  website is not defined  not accessable

}

// console.log(username)  // username is not defined not accessable



 // ++++++++++++  intresting example ++++++++


 // console.log(addOne(5)) // 6 

 function addOne(num){
return num + 1
 }


 // console.log(addOne(5)) // 6 



 // console.log(addTwo(5))  Cannot access 'addTwo' before initialization
 
 const addTwo =  function(num){
  return num +2
 }

 // console.log(addTwo(5))  // 7
 