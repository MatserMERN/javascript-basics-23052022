var person = new Object()

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

