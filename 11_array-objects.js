// Topic : Objects in js

// singleton contractor se agr object bane ga to ose singleton khete hn 
// object.create()

// agr literals ki tarah object bane ga to wo kabhi singleton nahi ho ga



const mySymbol = Symbol("key1")
// console.log(typeof mySymbol)
// object literals 

const jsUser = {
 name:"Umair",
[ mySymbol]:"mykey1",  // adding symbol in object using [] in syntex 
 "full Name":"umair abbasi",
 age:21,
 email:"umair@google.com",
 isLoggedIn:false,
 lastLoggedIn:['monday','friday']
 


}

// console.log(typeof mySymbol)
// console.log( jsUser[mySymbol])  // accessing the symbol

// console.log(jsUser.name)
// console.log(jsUser)
// console.log(jsUser["full Name"])
// console.log(jsUser['email'])
// console.log(jsUser['age'])

// changing the value of keys in object 

// jsUser.email = "umair@gamil.com"
// console.log(jsUser.email)  //  umair@gamil.com

// for (let i = 0; i < Object.keys(jsUser).length; i++) {
// console.log(Object.keys(jsUser)[i] + " " +  jsUser[Object.keys(jsUser)[i]])
 
// }

// for(let i in jsUser){
//  console.log(i +  " " +jsUser[i])
// }

// for(let i of jsUser){
//  console.log(i)  // typeError: jsUser is not iterable
// }


// object freeze

// Object.freeze(jsUser)
// jsUser.name = 'abbasi'
// console.log(jsUser)


// jsUser.greeting = function(){
//  console.log("Hello js user")
// }

// console.log(jsUser.greeting())


jsUser.greetingName = function(){
 console.log(`Hello js user, ${jsUser.name}`)  
 console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greetingName())