/*
    ? ... (Spread Opeartor) - Unpacks elelemnts from your array
    ? ... (Rest Operator) - Packs elements into an array
*/

// Spread
const add = [1,2,3]
const combined = [2,4,6, ...add]
console.log(combined)

// Rest Operator

function display(a,b,c,...values){
    console.log(values)
}
display(1,2,3,"Scott", [],{})

// Constructing array literal 

let initialChars = ['A', 'B']
let chars = [...initialChars, 'C' ,'D']
console.log(chars)

// Concatinate two arrays

let numbers = [1,2]
let moreNumbers =[3,4]

let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// Copying an rray

let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread operator and string

let charsOne = ['A', ...'BC', 'D']

console.log(charsOne)