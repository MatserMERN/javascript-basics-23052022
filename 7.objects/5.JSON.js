var obj = {
    "userId": 1,
    "id": 1,
    "title": "Some Title",
    "body": "Some data"
}

console.log(obj)

var student = {
    id: 1,
    "name": "Scott",
    "city": "Boston"
}

var studentStringify = JSON.stringify(student)
console.log(studentStringify)
console.log(typeof studentStringify)

var studentParse = JSON.parse(studentStringify)

console.log(studentParse, typeof studentParse)