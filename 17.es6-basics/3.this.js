// var employee = {
//     id: 1,
//     greet: function(){
//         console.log(this)
//         setTimeout(function(){
//             console.log(this)
//             console.log(this.id)
//         }, 2000)
//     }
// }

// employee.greet()

// fix using self variable

// var employee = {
//     id: 1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self.id)
//         }, 2000)
//     }
// }

// employee.greet()

// Fix using Bind

// var employee = {
//     id: 1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this), 2000)
//     }
// }

// employee.greet()

// Fix his using fat arrow function

var employee = {
    id: 1,
    greet: function(){
        setTimeout(() => {
            console.log(this.id)
        }, 2000)
    }
}

employee.greet()