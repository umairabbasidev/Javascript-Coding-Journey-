const user = {
 username: "umair",
 price: 999,

 welcomeMessage:function(){
  console.log(`${this.username}, welcome to website`)
  console.log(this)
 }
}


// user.welcomeMessage()// umair, welcome to website
// user.username = "Noman"
// user.welcomeMessage()  //  Noman, welcome to website


// console.log(this)


// notes 
// node environment mai agr this ko print krwaye gay to simply empty object ay ga {}
// or agr browser mai this ko print krway gay to window ka object mile ga
// this only object ka current context ko janne ke liye lagate hn function mai is ko agr lagay gay to value undefined ai gi 


// function chai(){
//  let username = "umair"
//  console.log(this.username)
// }
// chai()  // undefined




// const chai = function(){
//  let username = "umair"
//  console.log(this.username)
// }
// chai()  // undefined




// ______X_______X______
// arraow function 

const chai = ()=>{
let username = "umair"
console.log(this.username)
}


// chai() // undefined



// const addTwoNumbers = (num1,num2)=>{
//  console.log(num1 + num2)
//  return 
// }

// addTwoNumbers(5,5)


// implicit return 


// const addTwoNumbers =(num1,num2)=> num1+num2 
// const addTwoNumbers =(num1,num2)=> (num1+num2 )

// or agr obejct ho to ose bhi parenthesiss mai hi likhe gay 
const addTwoNumbers =(num1,num2)=> ({name:"umair"} )

console.log(addTwoNumbers())