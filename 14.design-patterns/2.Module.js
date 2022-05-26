// var Module = (function(){

// })()

// console.log(Module)

// Private Methods 

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

// })()

// console.log(Module)

// using return 

// var Module = (function(){
//     var privateMethod = function(){
//         return "Private Method"
//     }

//     return {
//         publicMethod : function(){
//             return "Public Method"
//         },
//         //privateMethod : privateMethod

//     }

// })()

// console.log(Module.publicMethod())
//console.log(Module.privateMethod()) // This will not work

// Anonymous Object Liiteral 

// var Module = (function(){
//     var privateMethod = function(){

//     }
   
//     return  {
//         publicMethodOne : function(){

//         },
//         publicMethodTwo : function(){

//         },
//         publicMethodThree : function(){

//         }
//     }
// })()

// console.log(Module)

// Locally Scoped Object literal 

// var Module = (function(){
// // Locally Scoped Object

//     var myObj  ={}

//     var privateMethod = function(){

//     }

//     myObj.publicMethod = function(){

//     }

//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Object literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObject = {
//         someMethod: function(){

//         },
//         anotherMethod: function(){

//         }
//     }

//     return myObject
// })()
    
//     console.log(Module)

// Revaling Module pattern

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         some : someMethod,
//         another: anotherMethod
//     }
// })()
    
// console.log(Module)

// Accessing Private methods

var Module = (function(){
    var privateMethod = function(message){
        return message
    }

    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        publicMethod: publicMethod
    }

})()
    
console.log(Module.publicMethod('Calling private Method'))