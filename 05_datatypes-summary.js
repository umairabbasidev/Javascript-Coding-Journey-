// # Primitive
// 7 types : all primitives datatypes are call by value means not give original reference, give copy of the original reference and when we changes something so the changes occur in copy of the original reference not in ogiginal reference.

// 7 types are given below 
// NN,SS,BB,U 
// Number, Null, Boolean, BigInt, String,Symbol,Undefined

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outSideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// const bigNumber = BigInt( 36477874837468793874778)
const bigNumber =  364778734456654304n
// console.log( typeof bigNumber)
// console.log(id==anotherId) // false

// Non Primitive Or Reference // directly allowed reference  
// Array,Objects,Functions

const name = ['umair','uzair','asad']

const obj = {
 name:"umair",
 afe:21
}

let Myfunc = function  (){
console.log('Hello World');
}
// console.log(typeof Myfunc)