class Student  {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName 
    }

    getFullname(){
        return this.firstName + ' ' + this.lastName
    }

    getData(){
        return this.getFullname()
    }

}

var student = new Student("Scott", "Desatnick")
console.log(student.getFullname())
console.log(student.getData())