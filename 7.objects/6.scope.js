// var person = {
//     firstName: 'Scott',
//     lastname: 'Desatnick',
//     city: 'Boston',
//     age: 44
// }

// person.email = "scott@ef.com" // CREATE
// person.firstName ="Great Scott" // UPDATE
// delete person.age // DELETE
// console.log(person) // READ


/* Object.frreze()
   ?  can not create new property
   ?  can update the existing property
   ?  can delete existing property
*/
// var studentPreventExtensions = {
//     firstName: 'Scott',
//     lastname: 'Desatnick',
//     city: 'Boston',
//     age: 44
// }

// Object.preventExtensions(studentPreventExtensions)

// studentPreventExtensions.email = "scott@ef.com" // CREATE
// studentPreventExtensions.firstName ="Great Scott" // UPDATE
// delete studentPreventExtensions.age // DELETE
// console.log(studentPreventExtensions) // READ

/* Object.seal()
   ?  can not create the new property
   ?  can update the existing property
   ?  can not delete the existing property
*/
// var studentSeal = {
//     firstName: 'Scott',
//     lastname: 'Desatnick',
//     city: 'Boston',
//     age: 44
// }

// Object.seal(studentSeal)

// studentSeal.email = "scott@ef.com" // CREATE
// studentSeal.firstName ="Great Scott" // UPDATE
// delete studentSeal.age // DELETE
// console.log(studentSeal) // READ

/* Object.freeze()
   ?  can not create the new property
   ?  can not update the existing property
   ?  can not delete the existing property
*/
var studentFreeze = {
    firstName: 'Scott',
    lastname: 'Desatnick',
    city: 'Boston',
    age: 44,
    address : {
        country : 'USA'
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email = "scott@ef.com" // CREATE
studentFreeze.firstName ="Great Scott" // UPDATE
delete studentFreeze.age // DELETE

studentFreeze.address.country = 'India'
console.log(studentFreeze) // READ

var studentStringify = JSON.stringify(studentFreeze)

console.log(studentStringify)

var studentParse = JSON.parse(studentStringify)
studentParse.firstName ="Great Scott"
console.log(studentParse)