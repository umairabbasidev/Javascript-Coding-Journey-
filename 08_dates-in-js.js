// Topic

// let myDate = new Date()
// console.log(myDate) // Wed Nov 08 2023 11:24:16 GMT-0800 (Pacific Standard Time)

// console.log(myDate.toString()) //  Wed Nov 08 2023 11:24:16 GMT-0800 (Pacific Standard Time)

// console.log(myDate.toDateString()) // Wed Nov 08 2023

// console.log(myDate.toISOString()) // 2023-11-08T19:28:47.888Z
// console.log(myDate.toLocaleString()) // 08/11/2023, 11:30:05

// console.log(myDate.toLocaleTimeString())  // 11:31:47

// console.log(myDate.getDate())// 8
// console.log(myDate.getDay()) // 3
// console.log(myDate.getFullYear()) // 2023
// console.log(myDate.getHours()) //11
// console.log(myDate.getMinutes()) //34
// console.log(myDate.setFullYear('2024'))
// console.log(myDate.setDate('30'))


// let myCreatedDate = new Date('2024,1,1')
// let myCreatedDate = new Date(2024,0,1,12,5,15) // 01/01/2024, 12:05:15
// console.log(myCreatedDate.toLocaleString())
// // console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())  // Tue Jan 02 2024

// console.log(new Date(2023,10,8,11,53,10).toLocaleString())



// let myCreatedDate = new Date("2023-10-8")
// console.log(myCreatedDate.toLocaleString())

// _______X_________X________


// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.getDay())
// console.log(myDate.getMonth())
// console.log(myDate.getFullYear())
// console.log(myDate.getDate())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())
// console.log(myDate.getMilliseconds())



let dob = new Date('16,may-2002')
console.log(dob)
console.log(dob.getTime())
let now = new Date()
console.log(now.getTime())
let diff = now-dob
console.log(diff)
let convert = diff/(1000*60*60*24*30*12)
console.log(Math.floor(convert))

 
