function greet(message){
    var city ='Boston'
    return function(name){
        return message + ' to ' + city + ' ' +name
    }
}

var sayHello = greet("Welcome")
console.log(sayHello)
var wish = sayHello("Scott")
console.log(wish)
