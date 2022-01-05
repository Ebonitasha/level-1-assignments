var readlineSync = require('readline-sync');

var name = readlineSync.question('May I have your Name:');
console.log('Welcome ' + name + ' your trapped haha and only have 3 options');

if (readlineSync.keyInYN("Would you like to enter the Escape room?")) {
    console.log("LETS GO");
}else {
    process.exit()
    isAlive = false
    console.log("END GAME");
}
var choice = readlineSync.question("what do you want to do : Put hand in hole, : Find Key, : Try Door  PRESS ENTER");

var isAlive = true;
var hasKey = false;
var escaped = false;

while (isAlive) {

let options = [ 'Put hand in hole', 'Find Key', 'Try Door']
let yourChoice = readlineSync.keyInSelect(options, "make your choice!");
    if (yourChoice === 0) {
        isAlive = false
        console.log('You was bit by deadly snake, Game Over');
    } else if (yourChoice === 1) {
        hasKey = true
        console.log(' you found the key you can exit the door');
    } else if (yourChoice === 2 && hasKey === false) {
        console.log('You cant open the door without the key, make another choice');
    } else if (yourChoice === 2 && hasKey === true ) {
        console.log('You have exit the room');
        break;
    }
}

 

