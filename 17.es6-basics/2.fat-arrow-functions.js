// var add = function(x, y){
//     return x +y
// }

// var add = (x, y) => {
//     return x +y
// }

// () => x+ y
// () => {return x + y}
// Both are same

//var add = (x, y) =>  {return x +y }

var add = (x, y) =>  x+y


console.log(add(10,20))

//sort an array

// let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return b-a
// })

let numbers = [4,2,6]

numbers.sort((a,b)=>a-b)

console.log(numbers)

// Single parameter
// (name) => name.length
//  name  => name.length
let names = ["Scott", "Adam", "Tuan"]

let lengths = names.map(name => name.length)

console.log(lengths)

// With no Parameters 

let logDocument = () => console.log(window.document)
logDocument()

// Line Breaks
// let multiply = (x,y)  // This will give syntax error
// => x*y 

let multiply = (x,y) => 
x*y 
console.log(multiply(5,4))

// Object Literal 

let setColor = (color) => ({value: color})
let backGroundColor = setColor('Green')

console.log(backGroundColor)