// (function(){
//     console.log("This is Immediately Invoked Function")
// })();


// (function(a,b){
//     console.log(a +b)
// })(1,2);


var message = (function(){
                    return "Welcome to IIFS"
              })();

 console.log(message);



// var confirm =  (function(message){
//     return message
// })("Here is your confirmation")

// console.log(confirm)