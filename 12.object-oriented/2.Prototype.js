// function Student(){
//     this.name = 'Scott'
//     this.gender = 'male'
// }

// Student.prototype.age = 44

// var studentObj1 = new Student()
// console.log(studentObj1.age)

// var studentObj2 = new Student()
// console.log(studentObj2.age)

function Person(firstName, lastname){
     this.firstName = firstName
     this.lastname = lastname
    //  this.getFullName = function(){
    //      return this.firstName + ' '+ this.lastname
    //  }
}

Person.prototype.getFullName = function(){
    return this.firstName + ' '+ this.lastname
}

var person1 = new Person("Scott", "Desatnick")
console.log(person1)

var person2 = new Person("Adam", "Colson")
console.log(person2)