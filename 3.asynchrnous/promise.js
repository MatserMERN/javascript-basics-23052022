console.clear()
function getNumbers(){
    return new Promise(function(resolve, reject){
        if(1==2) {
            resolve('This is resolved')
        } else {
            reject('This is rejected')
        }
    })
}

getNumbers()
.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})


console.log("one")
function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('two')
        },3000)
    })
}

getData()
.then(function(data){
    console.log(data)
    console.log('three')
    return "Finally we got it"
}).then(function(data){
    console.log(data)
})