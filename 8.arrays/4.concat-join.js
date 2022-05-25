var fruits = ["Oranges", "Apples", "Banana", "Guava"]

var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]

var mixOne = fruits.concat(vegetables)

console.log(mixOne)

var mixTwo = vegetables.concat(fruits)
console.log(mixTwo)


// Convert an array to string

var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "Martian"]

console.log(movies)

var movieString = movies.join(",")

console.log(movieString , typeof movieString)

// Convert String into an Array

var fullname =  "Scott Desatnick"

var names = fullname.split(" ")

console.log(names)