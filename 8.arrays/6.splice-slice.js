// Splice 

var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(3,0,"Lemon", "Kiwi")
console.log(fruits)

 var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]
 vegetables.splice(2,1)
 console.log(vegetables)

 var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]
 vegetables.splice(2,2, "Lemon", "Kiwi")
 console.log(vegetables)

 // Slice

 var newFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "PineApple"];

 var slicedData = newFruits.slice(3)

 console.log(slicedData)