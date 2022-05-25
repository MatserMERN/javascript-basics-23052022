var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

function display(message, city){
    return message + ' to ' + city + ', Mr.' + this.firstName +  ' ' + this.lastName 
}

var displayBindOne = display.bind(person1)
console.log(displayBindOne("Welcome", "Boston"))

var displayBindTwo = display.bind(person1, "Welcome", "Boston")
console.log(displayBindTwo())

var displayCall = display.call(person2, "Welcome", "Sydney")
console.log(displayCall)

var displayApply = display.apply(person3, ["Welcome", "Hanoi"] )
console.log(displayApply)

var obj = {
    id:1,
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name ="Desatnick"
        console.log(this)

        var updateName = function(){
            this.name = "Great Scott"
            console.log(this)
        }

        //updateName.bind(this)()
        //updateName.call(this)
        updateName.apply(this)
    }
}

obj.getName()