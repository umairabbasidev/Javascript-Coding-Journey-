let arr1 = ['umair','uzair','asad'];
let arr2 = ['tayyab','ibraheem',true,false];
let arr3 = ['noman','hamid','marsad','muzamil']


// arr1.push(arr2);
// console.log(arr1)  // ['umair','uzair','asad',['tayyab','ibraheem']]


// console.log(arr1[3][2]) // true



let marge = arr1.concat(arr2,arr3)
// console.log(marge)  //  ['umair', 'uzair', 'asad', 'tayyab', 'ibraheem', true, false]

// spread operator


let spared = [...arr1,...arr2,...arr3]
// console.log(spared) // ['umair', 'uzair', 'asad', 'tayyab', 'ibraheem', true, false]


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const anotherRealArray = anotherArray.flat(Infinity);

// console.log(anotherRealArray)  //  [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]




// console.log(Array.isArray('umair')) // false
// console.log(Array.from('umair')) // false
// console.log(Array.from({name:"umair"})) // intrestings case give empty array []



let score1 =100;
let score2 =200;
let score3 =300;
let score4 =400;
// console.log(Array.of(score1,score2,score3,score4)) // [100,200,300]