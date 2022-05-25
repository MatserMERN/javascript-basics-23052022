// var student = {
//     id: 1,
//     name: 'Scott',
//     email: 'Scott@ef.com',
//     isAdmin: true,
//     details: null,
//     code: undefined,
//     getName: function(){
//         return this.name
//     },
//     address: {
//         street: '1st Main'
//     },
//     subjects: ["AstroPhysics", "Astronomy"]
// }

// var person = Object.create(student) // 1st Way

// // var person = Object.create({}) // 2nd Way

// // var person = Object.create(null) // 3rd Way

// console.log(person.__proto__)


var person = Object.create(null)

// 1st way - To Add Properties
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"

person[cityName] ="Boston"

// 2nd way - To Add Properties
person.email = "scott@ef.com"

person.address = new Object()

person.address.state = "Massachusetts"

// 3rd way - To Add Properties
Object.defineProperty(person, 'phone', {
    value: '9876543210',
    writable: false
})
person.phone = 1234567890
person.id =4567
person.isAdmin = true
person.details = null
person.secret = undefined
person.getFullName = function(){
    console.log(this)
    //return person.firstName + ' '+ person.lastName - we can do this 
    return this.firstName + ' '+ this.lastName
}
person.subjects = ["Maths", "physics", "Chemistry"]
console.log(person)

console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.city)


console.log(person["address"]["state"])
console.log(person.address.state)

console.log(person.phone)
console.log(person.getFullName())