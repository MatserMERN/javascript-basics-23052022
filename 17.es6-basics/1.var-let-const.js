// var is function scoped
// function sample(){
//     var foo ="blue"
//     console.log(foo)

//     if(1===1){
//         console.log(foo)
//     }
// }
// sample()
// console.log(foo)

// let and const are block scoped

// function display(){
//     if(true){
//         var foo ="Hello"
//         let bar ='How are you ?'
//         const baz = "I am fine"

//         console.log(foo) //"Hello"
//         console.log(bar) // How are you
//         console.log(baz) // I am fine
//     }

//     console.log(foo) // Hello
//     //console.log(bar)
//     //console.log(baz)
// }

// display()

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

// for(const i=0; i<3; i++){
//     console.log(i)
// }
//console.log(i)

// var a =10
//     a =20
//     a = function(){}

// console.log(a)

// function sample(){
//     // let foo =1
//     //     foo =100
//     //     foo ={a:1}
//     //     foo = function(){}

//     // var fooone =101
//     //console.log(foo)
//     const baz = 100
    
//    /// const baz =300
//     let bar
//     bar =200
//          // baz =200
//    console.log(baz)
//    console.log(bar) 

 
// }

// sample()


const names = ["Scott", "Adam", "Tuan"]
names.push("uma")

console.log(names)

const DB_SERVER_NAME = 'AzureServer'
const DB_USERNAME ='user'
const DB_PASSWORD ='password'

const fullName = "john Galt".split(" ").push("scott").join(" ")

console.log(fullName)
// var somenames = fullName.split(" ")
// somenames.push("scott")
// console.log(somenames)
// console.log(somenames.join(" "))