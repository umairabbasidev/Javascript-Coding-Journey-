// Topic : string 

const name = "Umair";
const developer = 'javascript develoepr'
const repoCount = 50;
// console.log(name + " " +  repoCount);

// console.log(`Hello my name is ${name.toUpperCase()} and I am ${developer} and my repo count is ${repoCount}`)

// new way of declaring string 

const str = new String("umiar")
// console.log(str)

// console.log(name.__proto__)

// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])

// String methods 
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(3))  // i give character of the give index provieded
// console.log(name.indexOf('i'))  // 3  give index of the given character
// console.log(name.lastIndexOf('r'))
// console.log(name.startsWith('U'))  // give boolean from true
// console.log(name.endsWith('i'))  // give boolean from false
// console.log(name.slice(2,4)) // ai
// console.log(name.substring(0,4))
// console.log(name.replace('Umair','asad'))
// let trimVale = '               hello world'
// console.log(trimVale)
// console.log(trimVale.trim(trimVale))

let url = 'https://umair.com/umair%20abbasi';
// console.log(url.includes("umair")) // true
// console.log(url.replace('%20','$'));

console.log(name.split(' '))