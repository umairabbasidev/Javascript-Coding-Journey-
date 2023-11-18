// Topic Higer order array loops
// for in
// for of
// for each loop

// ["","",""]
// [{},{},{}]

// for of loop

// const arr = [1,2,3,4,5]
// for(let i of arr){
//  // console.log(i)  // direct values mil jati hn
// }

// const str = "umair";
// for(let i of str){
//  // console.log(i)  // direct values mil jati hn
// }

// const obj ={
//  name:"umair",
//  age:21,
//  skill:"developer"
// }

// for(let i of obj){
//  // console.log(i)  // TypeError: obj is not iterable
// }

// Maps : unique value hoti hn or sequence of orderd hota h

// const map = new Map()
// map.set("js","javascript")
// map.set("py","python")
// map.set("ruby","ruby")

// for(let[ key,values] of map){
// console.log(`${key} is stand for  of ${values}`)
// }

// for in loop

// let name = "umair"
// for(let i in name){
//   // console.log(name[i])  direct values nahi de ga hamin indexing mili gi then [] ye syntex laga kr values mikal sakte hn
//  }

// let array = ['umair','asad','uzair']
// for(let i in array){
//   console.log(array[i]) // direct values nahi de ga hamin indexing mili gi then [] ye syntex laga kr values
// }

// const obj ={
//  name:"umair",
//  age:21,
//  skill:"developer"
// }
// for(let i in obj){
//  console.log(`The user ${i} is ${obj[i]}`) //  directly key or values mil jati hn
// }

// const map = new Map()
// map.set("js","javascript")
// map.set("py","python")
// map.set("ruby","ruby")

// for(let i in map){
//   console.log(i) //   not show any result b/c map is nor iteratable
//  }

// summary of all kinds of loops in js

// basic for loop se hum array , string ki direct values nahi milti indexing milti h then hu pir [] ye suntex use kr key values get kr sakte hn .
// object ke ek syntext h niche os se num basic for loop se keys and values nikal sakte hn

// let str = "Umair";
// for(let i=0;i<str.length;i++){
//  console.log(str[i])  not give dirct values it gives indexing then we use this  [] syntext to get values from string
// }

// let arr = ['umair','uzair','noman',1,2,true,false]

// for (let i = 0; i < arr.length; i++) {
//  // const element = arr[i];
//  // console.log(element)same
//  // console.log(arr[i]) same
//  // not give dirct values it gives indexing then we use this  [] syntext to get values from array

// }

// let mark ={
//  umair:90,
//  uzair:80,
//  noman:70,
//  hamid:60
// }
// for (let i = 0; i < Object.keys(mark).length; i++) {
//  console.log(`The marks of ${Object.keys(mark)[i]} are ${mark[Object.keys(mark)[i]]}`)
//  // use above syntex to find the keys and values in object

// }

// _____X_______X________
// summary of for of loop
// string mai index milta h [] use kr key values find kr lete hn, array mai direct values milti hn,
// object mai erro ata h , map mai ye syntext use kr key key and value dono find kr sakte hn [key ,value]

// // for of loop
// let str = 'Umair';
// for(let key in str){
//  console.log(str[key]) // give index value then we use [] this syntex to find values
// }

// let  arr = ['umair','uzair','aasd']
// for (const iterator of arr) {
//  console.log(iterator)  // give direct values
// }

// let obj = {
//  name:"umair",
//  age:21,
//  skill:"developer"
// }

// for (const iterator of obj) {
//  console.log(iterator) // obj is not iterable
// }

// const map = new Map()
// map.set("js","javascript")
// map.set("py","python")
// map.set("ruby","ruby")

// for(let[ key,value] of map){
//   console.log(key,value) //   give this syntext to get keys and values of map [key],value]
//  }

//summary
// String, array mai indexing milti h . object mai dirct values milti hn
// for in loop

// let str = 'umair';
// for (const key in str) {
// console.log(str[key])  // give indexing
// }

// let arr = ['umair','asad','noman']
// for (const key in arr) {
//  console.log(arr[key])  //  give indexing
// }

// let obj = {
//  name:'umair',
//  age:21,
//  skill:"developer"
// }

// for (const key in obj) {
// console.log(key + " " +obj[key]) // give dirct keys
// }

// const map = new Map()
// map.set("js","javascript")
// map.set("py","python")
// map.set("ruby","ruby")

// for(let  key in map){
//   console.log(key) //   not show any result
//  }

// for each

// let str = ''
// str.forEach((element)=>{
// console.log(element)  // string pr error de ga
// })

// let arr = ['umair','asad','noman']
// arr.forEach(element => {

//  console.log(element)
// });

// let obj = {
//  name:"umair",
//  age:21,
//  skill:"developer"
// }
// obj.forEach((element)=>{
//  console.log(element)  // not allowd
// })

// const map = new Map()
// map.set("js","javascript")
// map.set("py","python")
// map.set("ruby","ruby")

// map.forEach((key,value)=>{
//  console.log(value,key)  // give key and value both
// })

// coding.forEach((value)=>{
// console.log(value)
// })

// coding.forEach(function(value){
// console.log(value)
// })

function printMe(item) {
  // console.log(item)
}
// function  as a reference bhi use kr sakte hn
// coding.forEach(printMe)

// coding.forEach((item,index,array)=>{
// console.log(item,index,array)
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageFileName)
});

// Summary(As I understood) :
// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
// Corrections Are Welcomed

// const coding =['javascript','ruby','python','swift','java']

// const values = coding.forEach( (item)=>{
// console.log(item)
// })
// console.log(values) // undefined forEach kuch bhi return nahi krta

// _______X________X______
// filter, map ,reduce

// const myNums = [1,2,3,4,5,6,7,8,9,20]

// const newArr = myNums.filter((item)=>{
//  console.log(item)
//  return item
//  })
//  console.log(newArr)

// const newNums = myNums.filter((item)=>item>4)

// console.log(newNums)

// const newNums = myNums.filter((item)=>(item>4))

// console.log(newNums)

// const newNums = myNums.filter((item)=>{
//  item>4

// })

// console.log(newNums) // [] return empty array // b/c hum ne scope open kia h cutly brasis se then hmain explicit return keyword likhna tha nahi likha jis ki wja se ye empty array aya h

// const newNums = myNums.filter((item)=>{
// return  item>4  // explicite return krna pare gay
// })

// console.log(newNums)  //  [5, 6, 7, 8, 9, 20]

// myNums.filter((item)=>{

// })

// agr mai is program ko foreach ke through krna chahon to

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
// let newNums = [];
// myNums.forEach((item) => {
//   if (item > 4) {
//     newNums.push(item);
//   }
//  });
//  console.log(newNums)




// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((item)=>{
// return item+10
// })
// console.log(newNums)

// const newArr = myNums.map((item)=>{
// console.log(item)
// return item
// })
// console.log(newArr)
