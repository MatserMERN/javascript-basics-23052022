// function Database(){
//     console.log('New DB Connection is created')
// }

// var dbCon1 = new Database()
// console.log(dbCon1)
// var dbCon2 = new Database()
// console.log(dbCon2)
// var dbCon3 = new Database()
// console.log(dbCon3)
// var dbCon4 = new Database()
// console.log(dbCon4)

var DBConnection = (function(){

    var connection  = null

    var createConnection = function(){
        var obj = Object.create(null)
        console.log('DB Connection Object Created')
        return obj
    }

    var getConnection = function(){
       if(!connection){
           console.log('No connection obj available so creating new Object')
           connection = createConnection()
       } else {
           console.log('Connection obj is already present so not creating new Object')
       }
       return connection
    }

    return { 
        getConnection: getConnection
    }

})()


var dbCon1 = DBConnection.getConnection()
console.log(dbCon1)

var dbCon2 = DBConnection.getConnection()
console.log(dbCon2)

var dbCon3 = DBConnection.getConnection()
console.log(dbCon3)

var dbCon4 = DBConnection.getConnection()
console.log(dbCon4)
