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


function add(a,b){
    return a + b
}

console.log(add(1,2))
console.log(add("Scott", " Desatnick"))

function getName(firstName, lastName){
    return firstName + ' ' +  lastName
}

function getName(firstName){
    console.log('Function at line 46')
    return firstName 
}

function getName(firstName, middlename, lastname){
    console.log('Function at line 51')
    return firstName  + ' ' +  middlename + ' ' + lastname
}

console.log(getName("Scott", "Desatnick"))

console.log(getName("Scott"))

console.log(getName("Scott", ".Jr", "Desatnick"))