console.log(multiply(2)(3)(4)) // 24

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

var a = 10
var b = a
    a = 20
console.log(a)
console.log(b)

// 20, 10

var a = [1,2]
var b = a
a.push(3)
console.log(a)
console.log(b)

// [1,2,3] [1,2]
// [1,2,3] [1,2,3]

var a = [1,2]
var b = a
a = [1,2,3]

console.log(a)
console.log(b)

// [1,2,3] [1,2,3]

var name = 1 + 2 + "Scott" + 3 + 4

console.log(name) 

// 3Scott34

var output = (function(x){
    delete x
    return x
})(0)

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:1})

console.log(output)

var output = (function(x){
    delete x.a
    return x
})({a:1})

console.log(output)

// diff between == and ===

console.log(1==1)
console.log(1=='1') // Only checks for value
console.log(1==='1') // Checks for both value and type

var obj1 ={a:2}
var obj2 ={a:2}

console.log(obj1===obj2) // This will not work 

// How to empty an array 

var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method 1 
// var length = array.length
// for(var i=0; i<length; i++){
//     array.pop()
// }

// Method 2
//array =[]

//Method 3
// array.forEach(function(value, index){
//     array.pop()
// })

//Method 4
//array.length =0

// Method5 
//array.splice(0,array.length)

// Method6
// while(array.length){
//     array.pop()
// }

console.log(array)

var a =10

var message = a >10 ? "Its a big number" : "Its a small number"

console.log(message)

console.log(isEven(3)) // false
console.log(isEven(6)) // true
console.log(isEven(7)) // false

function isEven(a){
    // var value = a%2
    // if(value ===0){
    //     return true
    // } else  {
    //     return false
    // }

   // return a %2 ==0 ? true : false
    return a%2 ==0 
}


console.log(extensionExtractor("resume.doc")) // doc
console.log(extensionExtractor("hyderabad.txt")) // txt
console.log(extensionExtractor("notepad")) // false

function extensionExtractor(filename){
    // var files = filename.split(".")
    // if(files.length>1){
    //     return files[1]
    // } else {
    //     return false
    // }

    return filename.split(".").length >1 
           ? filename.split(".")[1] 
           : false
}