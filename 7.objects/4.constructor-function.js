function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

var student = new Student("Scott", "Desatnick")

console.log(student)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getFullName())
