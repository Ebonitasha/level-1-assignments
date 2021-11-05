const readline = require("readline-sync")

var readlineSync = require('readline-sync');

var name = readlineSync.question('What is your Name:');

console.log('Hi, ' + name + ' Lets do some math!');


var noom1 = readlineSync.question("What is your first number?")
var noom2 = readlineSync.question("What is your second number?")
var op = readlineSync.question("enter + to do addition, enter - to do subtraction, enter * to do mulitiply, enter / to do divide")

function addition(noom1, noom2) {
return +noom1 + +noom2
}
function subtraction(noom1, noom2) {
return noom1 - noom2
}
function multiply(noom1, noom2) {
return noom1 * noom2    
}
function divide(noom1, noom2) {
return noom1 / noom2
}


function calculator(noom1, noom2, op) {
    if(op === "+") {
        console.log(" your result " + addition (noom1,noom2))

    } else if (op === "-") {
        console.log(" your result " + subtraction (noom1,noom2))
        
    } else if (op === "*") {
        console.log(" your result " + multiply (noom1, noom2))

    }else if (op === "/") {
        console.log( " your result " + divide (noom1, noom2))
    }
}
calculator(noom1, noom2, op)
