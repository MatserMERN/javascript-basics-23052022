try {
    // code that may or may not throws error
}
catch {
    // code to be executed if an error occurs
}
finally {
    // code to be executed regardless of an error occurs or not
}

try {
    var output = getMessage("Hello", "Scott")
} catch(ex){
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
}

try {
    eval('confirm("are you sure ?"')
} catch(ex){
    console.log(ex)
    console.log(ex.name)
    console.log(ex.message)
} finally {
    console.log('This code will always get executed')
}

try {
    console.log(`This is try block`)
} finally {
    console.log(`This is finally block`)
}

// throw

try {
    throw "Error Occured"
} catch(ex){
    console.log(ex)
}

try {
    //var studentId = getStudent(studentId)
    var studentCount = 2

    if(studentCount >1) {
        throw {
            studentId:100,
            message: 'Duplicate records found for same studentId'
        }
    }
} catch(ex){
    console.log(ex)
}