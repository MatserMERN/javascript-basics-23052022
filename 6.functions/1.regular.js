function getValue(){
    //return 1
    //return "Scott"
    //return true
    //return null
    //return undefined
    // return {}
    //return function(){}
    // return []
    return
}

console.log(getValue())

function getFullName(){
    return "Scott" + ' ' + "Desatnick"
}

console.log(getFullName())

function getFullNameWithParams(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(getFullNameWithParams("Scott", "Desatnick"))
console.log(getFullNameWithParams("Adam", "Colson"))
console.log(getFullNameWithParams("Tuan", "Bui"))
console.log(getFullNameWithParams())
console.log(getFullNameWithParams("Uma"))
console.log(getFullNameWithParams(null))
console.log(typeof getFullNameWithParams(null))