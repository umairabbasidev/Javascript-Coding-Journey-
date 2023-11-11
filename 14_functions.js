// Topic: functions in js 



function sayMyName (){
 console.log('U');
 console.log('M');
 console.log('A');
 console.log('I');
 console.log('R');
}

// sayMyName()

function addTwoNumbers (number1,number2){

 console.log(number1+number2)
}

// const result = addTwoNumbers(3,5) // 8
// console.log("Result",result)  // Result undefined



function addTwoNumbers (number1,number2){

 let result = number1 + number2
 return result
 console.log("umair")  // return ke bad kuch bbi execute nahi hota

}


// const result = addTwoNumbers(5,3)
// console.log("Result",result) // 8



function addTwoNumbers (number1,number2){
console.log(number1+number2)
 return  number1 + number2
 


}


// const result = addTwoNumbers(5,3) // 8
// console.log("Result",result) //Result 8


// parameters  and arguments  in function

function logginUserMessage (username){
 return `${username} just logged in `
}
 
// logginUserMessage("umair")  // nothing is print b/c hum ne ose print krne ka kaha hi nahi h
// console.log(logginUserMessage("umair"))  // umair just logged in 


// console.log(logginUserMessage()) // undefined just logged in 



function logginUserMessage (username){
 if (username===undefined) {
  console.log("please enter a username");
  return
 }
 return `${username} just logged in `
}

// logginUserMessage() //  please enter a username
// console.log(logginUserMessage('umair'))   // umair just logged in 




function logginUserMessage (username='umair'){  // default parameter 
 if (!username) {
  console.log("please enter a username");
  return
 }
 return `${username} just logged in `
}

logginUserMessage()

console.log(logginUserMessage())
console.log(logginUserMessage('asad'))
