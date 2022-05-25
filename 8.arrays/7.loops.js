
var names = ["Scott", "Adam", "Tuan"]
// for loop
console.log('******* For Loop ******')
for(var i=0; i<names.length; i++){
    console.log(names[i] , i)
}

// forEach
console.log('******* ForEach Loop ******')
names.forEach(function(name, index){
    console.log(name, index)
})

// map
console.log('******* map Loop ******')
names.map(function(name, index){
    console.log(name, index)
})

// forEach vs Map
console.log('******* ForEach vs Map ******')

var data1 = names.forEach(function(name, index){
    return name
})

var data2 = names.map(function(name, index){
    return name
})

console.log(data1)
console.log(data2)

// for ..in
for(var name in names){
    console.log(name)
}

// for ..of
for(var name of names){
    console.log(name)
}

for(var [index, value] of Object.entries(names)){
    console.log(index, value)
}