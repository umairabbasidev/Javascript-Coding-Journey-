// topic : objects part2

// const tinderUser = new Object()  // singleton object
// console.log(tinderUser)

const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "umair";
tinderUser.isLogedIn = false;

// console.log(tinderUser)
// console.log(tinderUser.name)
// console.log(tinderUser['isLogedIn'])

const regularUser = {
  email: "some@gmail.com",
  fullnames: {
    userOneFullName: {
      firstName: "umair",
      lastName: "abbasi",
    },
  },
};

// console.log(regularUser.fullnames.userOneFullName.firstName)
// console.log(regularUser.fullnames.userOneFullName.lastName)



// merging of objects 

const obj1 = {
  1:"a",
  2:"b"
}

const obj2 = {
  3:"c",
  4:"d"
}

const obj3 = {
  4:"e",
  5:"f"
}

// const obj3 = {obj1,obj2}
// console.log(obj3)

// using spread operator 
const mergeObj = {...obj1,...obj2,...obj3}
// console.log(mergeObj)  // {1: 'a', 2: 'b', 3: 'c', 4: 'd'} same

// using assign method 
// one more syntext of merging the objects  
                            // targer, source   this bracket is not mandatory {}   
const mergObj = Object.assign({},obj1,obj2,obj3)
// console.log(mergObj)  // {1: 'a', 2: 'b', 3: 'c', 4: 'd'} same




// extract keys and values in objects and return in array form []


// console.log(Object.keys(tinderUser))  // ) ['id', 'name', 'isLogedIn']

// console.log(Object.values(tinderUser))  // (3) ['123abc', 'umair', false]



// array of objects 

const user = [
  {
    id:1,
    email:"u@gmail.com"
  },
  {
    id:2,
    email:"m@gmail.com"
  },

  {
    id:3,
    email:"a@gmail.com"
  },

  {
    id:4,
    email:"i@gmail.com"
  },
  {
    id:5,
    email:"r@gmail.com"
  },
]

// console.log(user[0])
// console.log(user[0].id)
// console.log(user[0].email)


// console.log(user[4])
// console.log(user[4].id)
// console.log(user[4].email)


// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogedIn'))  // true
console.log(tinderUser.hasOwnProperty('pak'))  // false