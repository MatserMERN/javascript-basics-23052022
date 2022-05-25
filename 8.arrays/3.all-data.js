var data = [
            1,
            "Scott",
            true,
            null,
            undefined,
            {name: 'Scott'},
            function(name){
                return name
            },
            ["Red", "Green", "Blue"]
           ]

// access the function 
// get the object value and pass it as parameter to that function
// print 'Scott'
console.log(data[6](data[5].name))

// access the function 
// get the object value and pass it as parameter to that function
// get the array and get the value blue
// print 'Scott Likes Blue'
console.log(data[6](data[5].name) + ' Likes ' +  data[7][2])