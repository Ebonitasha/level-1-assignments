var name = "eboni"
var upper = name.toUpperCase()
var lower = name.toLowerCase()


var number = "12345678"

// findMiddleIndex("Hello")
// findMiddleIndex("Hello World")
// var middle = number.findMiddleIndex()
// console.log(middle)
var half = number.slice(0,4)
console.log(half)

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"
var hello = "Hello"
var half = hello.slice(0,2)
console.log(half)
var hi = "Hello World"
var noWorld = hi.slice(0,5)
console.log(noWorld)

var question = "DaTe ME"
var date = question.slice(0,4)
console.log(date)
var newDate = date.toLocaleUpperCase()
console.log(newDate)
var me =  question.slice(5)
console.log(me)
var newMe = me.toLocaleLowerCase()
console.log(newMe)
var newQuestion = newDate + " " + newMe
console.log(newQuestion)