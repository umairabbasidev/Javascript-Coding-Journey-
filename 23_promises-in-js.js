// Topic : Promises

// const promisesOne = new Promise(function(resolve,reject){
//  // Do an async task
//  // DB calls, cryptography,network
//  setTimeout(function(){
//   console.log("Async task is complted")
//   resolve()
//  },3000)

// })

// promisesOne.then(function(){
//  console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
//  console.log("Async task 2 is complted ")
//  resolve()
// },3000)

// }).then(function(){
//  console.log('Async task 2 is resolved')
// })

// const promiseThree = new Promise(function(resolve,reject){
// setTimeout(function(){
// resolve({name:"umair",age:21,email:"umair@gmail.com"})
// },2000)
// })

// promiseThree.then(function(user){
// console.log(user)
// })

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "umairabbasi", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>console.log(`The promise is either resolved or rejected`))

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function promiseFiveConsumed() {
//   try {
//     const respone = await promiseFive;
//     console.log(respone);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promiseFiveConsumed();

// fetch

// async function getMyInformation() {

//   try {
//    const respone = await fetch("https://api.github.com/users/umairabbasidev");
//    const data = respone.json();
//    console.log(data);

//   } catch (error) {
//     console.log("E", error);
//   }
// }

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/umairabbasidev");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

// async function getApiData(){
//  try {
//   const respone =await fetch('https://api.github.com/users/umairabbasidev')
//  const data = await respone.json()
//  console.log(data)

// } catch (error) {
//  console.log("Error",error)
// }
// }
// getApiData()

// fetch using .then .catch

// fetch("https://api.github.com/users/umairabbasidev")
//   .then((respone) => {
//     return respone;
//   })
//   .then((dataArrived) => {
//     console.log(dataArrived);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log(" Data fetched Successfully");
//   });

// _____X______X_______
// agian my self  practice promise

// const promiseTwo = new Promise(function(resolve,reject){
// setTimeout(function(){
//  console.log("Async task 3 is completed using declaring variable ")
//  resolve()
// },2000)

// })
// promiseTwo.then(function(){
//  console.log('Async task 3 is resolved using declaring variable ')
// })

// new Promise(function(resolve,reject){
//  setTimeout(function(){
//   console.log("Async task 4 is completed without using variable")
//   resolve()
//  },2000)
// }).then(function(){
// console.log('Async task 4  is resolved using declaring variable')
// })
