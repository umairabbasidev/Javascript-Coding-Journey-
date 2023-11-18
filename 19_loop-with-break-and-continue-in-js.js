// Topic Loop with break and continue

// for
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log("'5' is best number")
  }
  // console.log(i);
}

for (let i = 0; i <= 5; i++) {
  // console.log(`Outer Loop Value:${i}`);
  for (let j = 0; j <= 4; j++) {
    // console.log(`Inner Loop Value:${j} and outer Loop value is:${i}`);
  }
}


// write tables 1 to 10 using nested for loop 

for (let i = 1; i <= 10; i++) {
 // console.log(`Outer loop value is:${i}`)

 for (let j = 1; j <= 10; j++) {

   // console.log(i +' x ' + j + ' = ' + i*j)
   // console.log(`${i} x ${j} = ${i*j}`);
 }
}

// for loop with array 
let array = [1,2,3,4,5]
// console.log(array.length)

for (let index = 0; index < array.length; index++) {
 const element = array[index]
 // console.log(element) 
 
}

// for loop with string 
let name = 'Umair'
for (let i = 0; i < name.length; i++) {

 // console.log(name[i])
}



// for loop with object

let obj = {
 name:"Umair",
 age:21,
 skillSet:"React Front End developer"
}
for (let i = 0; i < Object.keys(obj).length; i++) {
// console.log(obj)
// console.log(`The user ${Object.keys}()`)
// console.log(obj)

// console.log("The user "  + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
// console.log(`The User ${Object.keys(obj)[i]} is ${obj[Object.keys(obj)[i]]}`)
 
}


// break and continue keyword

// let myArr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < myArr.length; i++) {
//  const element = myArr[i];
//  if (element===5) {
//   // console.log('5 is best number')
//   // break
//   continue
//  }
//  console.log(element)
 
 
// }


for (let i = 1; i <=20; i++) {
 if (i==5) {
  // console.log(`Detected ${i}`)
  break  // stoped control flow of loop

 }

 // console.log(i);
}


for (let i = 1; i <=20; i++) {
 if (i==5) {
  console.log(`Detected ${i} not print the value of ${i}`)
 continue  // skip one value and contine the control flow of loop

 }  

 

 console.log(i)

}