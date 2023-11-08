// Topics Arrays in js

// let myArr = [1,2,3,4,5];
// console.log(myArr)
// console.log(myArr.length)
// console.log(myArr[2])


// Arrays methods

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)


// myArr.unshift(0)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)


// console.log(myArr.includes(9)) // false
// console.log(myArr.includes(5)) // true
// console.log(myArr.indexOf(2)) //1
// console.log(myArr.slice(2,4))


// let newArr = myArr.join('_')
// console.log(newArr)
// console.log( myArr)


// console.log(myArr.splice(1,0))
//  myArr.splice(2,1,"umair")
// console.log(myArr)


let myArr = [0,1,2,3,4,5]
console.log(myArr)  //  [0,1,2,3,4,5]

let myn1 = myArr.slice(1,3)
console.log("A",myArr)  // [0,1,2,3,4,5] not affect the original array and last range not included
console.log(myn1) // [1,2]


let myn2 = myArr.splice(1,3)
console.log("B",myArr) // [0,4,5]  affect the orignal array and last value included
console.log(myn2) // [1,2,3]