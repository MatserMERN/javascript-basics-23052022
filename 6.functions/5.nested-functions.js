function one(){
    return function two(){
        return function three(){
            return "Here is the secret ingredient"
        }
    }
}

var first = one()
var second = first()
var third = second()
console.log(third)

console.log(one()()())

function display(){
    var test = function(){
        var say = function(){
            return "I said it already"
        }
        return say()
    }
    return test()
}

console.log(display())