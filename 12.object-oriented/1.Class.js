// Class

function Student(){

}

// Instance

function Person(){

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance

// constructor

function Order(){
    console.log('Order is initiated')
}

var order = new Order() // Order() is a constructor 

// properties

function Customer(gender){
    this.gender = gender // property
}

var customer1 = new Customer('female')
var customer2 = new Customer('male')

console.log(customer1)
console.log(customer2)