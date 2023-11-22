// Topic Immediateley invoked function expression

// two main reason ki waja se IFFE use krte hn ek to function ko immediatley invoked krna ho to 
// or dusra global scope ke pollution se bachne ke liye IFFE use kete hn  
// syntex 


// (function chai(){
//  console.log(` DB CONNECTED`);
// })();

// ()() // syntex eg
// chai()

// Important note 

// error is liye a raha h upper sami collon lagana h 
// (()=>{
//  console.log(`DB CONNECTED`)
// })()




// const chai = (()=>{
//  console.log("umair")
// })()
// chai()

// (()=>{
//  console.log(`DB CONNECTED`);
// })()

// ________X________X______

// (function one(){
//  // named IFFE
//  console.log("Umair");
// })();
// one()

// ((name,age)=>{
//  console.log(`my name is ${name} and my age is ${age} `)
// })('umair',21)





// important note two ya two se zada IFFE jab bhi like gay to semicollen lazmi lagana h other wise error de ga 

 