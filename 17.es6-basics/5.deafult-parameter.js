// function say(message){
//     console.log(message)
// }

// say()

// ES5

// function say(message){
//     message = typeof message !== 'undefined' ? message : "Hi"
//     console.log(message)
// }

// say("Hello")

//ES6

function say(message="Hi"){
    console.log(message)
}

say("Hello")