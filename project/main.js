const readlineSync = require("readline-sync");

let name = readlineSync.question("Player, What is your name?");
console.log('Welcome ' + name + ' to my RPG game!');

if (readlineSync.keyInYN("Will you like to go on a hike? ")) {
    console.log("Ok, before we start our journey, we need to pick a charater to be on our hike!");
}else {
    process.exit()
    isAlive = false
    console.log("END GAME");
}
let playerName = readlineSync.question("Which charater will you like to be? : Princess Fiona, : Princess Elsa, : Pocahontas PRESS ENTER" );

let options = [ 'Princess Fieona', 'Princess Elsa', 'Pocahontas']
let yourChoice = readlineSync.keyInSelect(options, "make a choice");
  if (yourChoice === 0){
     console.log("Princess Fiona, lets get home to Sherk and the kids")    
 }else if (yourChoice === 1){
    console.log("Princess Elsa, lets be on the way to the icey castle")
 }else if (yourChoice === 2){
    console.log("Pocahontas,Lets be on our way to find love") 
 

console.log("OK " + playerName + " your goal is to get to your destination while encountering wild life on your hike") 
}
let isAlive = true
function PlayersInfo(name, playerHp, items, inventory){
    this.name = name    
    this.hp = playerHp
    this.items = items 
    this.inventory = inventory 
}

function createPlayers(){
    if(yourChoice === 0){
    return new PlayersInfo('Princess Fiona', '50')
    }else if(yourChoice === 1){
    return new PlayersInfo("Princess Elsa", "50")
    }else 
    return new PlayersInfo("Pocahontas", "50")
}    
function Enemy (enemyName, enemyHp){
    this.enemyName = enemyName
    this.enemyHp = enemyHp
}
// const enemyName = ["snake", "eagle", "rabbit"]

function createEnemy(){
    let randomEnemy = Math.floor(Math.random()*3)
    if (randomEnemy === 0){
        return new Enemy('snake');
    }else if (randomEnemy === 1){
        return new Enemy('eagle');
    }else if (randomEnemy === 2){
        return new Enemy('rabbit');
    }
}

while (isAlive == true || isFighting == false) {
    let input = readlineSync.question("Select 'w' to walk. Select 'p' or type 'print' to check the player healthpoints and inventory.")
    walk(input)
  }


function walk(input){
let currentEnemy = createEnemy()
    if (input == "w"){
    let enemyLuck = Math.floor(Math.random()*3)
    if (enemyLuck === 0){
        console.log("Its a beautiful day today!")
    }else if (enemyLuck === 1){
        fight(currentEnemy)
    }else if (enemyLuck === 2){
        console.log("should have wore better shoes")
    }
    if(input === "p"){
    console.log(PlayersInfo)
    }
  }
}
// var enemyItems = ["knife", "bat", "gun"];
function fight(){
let isFighting = true
while(isFighting){
    let attackOrRun = readlineSync.question('You are about to be attacked by ${CurrentEnemy.enemyName}, Do you Fight back[f] are Runnnnnn![r]')
    // let attackOrRun = readlineSync.question(`You are about to be attacked by ${currentEnemy.name}, Do you Fight back[f] are Runnnnnn![r]`)
    if (attackOrRun === "f"){
let attackOrRun = readlineSync.question("To kill your oppoinet, you must choose a weapon to fight with. Which item do you want? PRESS ENTER");
let items = ["knife", "bat", "gum"]
let youSelect = readlineSync.keyInSelect(items, "make a choice");  
        if(youSelect=== 0){
            console.log("dont cut yourself, fight")
        battle()    
        }else if( youSelect === 1){
            console.log("dont miss, swing")
        battle()    
        }else{
            console.log("are you hungry")
        battle()
        }
    
    } else if(attackOrRun === "r"){
    run()
    }
            }
          
function run(){
runForYourLife = Math.floor((Math.random()*2) +1)
    if(runForYourLife === 1){
    console.log("ONLY A TRUE PRINCESS CAN EXCAPE IN HEELS, you can stop running now!!")
    isFighting = false
    walk()
} 
else if (runForYourLife === 2){
    console.log("your feet must hurt cause the enemey caught you,,So fight")
    fight()
    }
}
}

function battle(currentEnemy){
    let hp = 50
    let enemyHp = 10
    isAlive
    while (hp >0 || currentEnemy.enemyHp >0){
        let damageReceived = Math.floor((Math.random()*10)+2)
        if(hp >0) {
    let playerHp = hp -= damageReceived
            console.log("You are bleeding and lost " + damageReceived + " now you have " + playerHp + " left ")
        }
        else if(playerHp <= 0){
            isAlive = false  
            playerDies()
        }
        
        let enemyDown = Math.floor((Math.random()*10)+ 5);
        if(enemyHp >= 0){
    let enemyHealth = enemyHp -= enemyDown
            console.log("The enemy is hurt and has lost " + enemyDown + " points, theres only " + enemyHealth + " left.")
        }
        else if(enemyHp < 1){
            enemyDies()
            isAlive = false
            break
        }
    }  
function enemyDies(){
    isAlive = true
    const item = ['water', 'gun', 'bomb']    
    const randomAdd = item[Math.floor(Math.random()* item.length)] 
    isFighting = false
    console.log("Only a true princess and kill and eat her predator")
    playerGets = Math.floor((Math.random()*20) + 10)
    let playerEarns = hp += playerGets
    console.log("Since your full now, you have regained your strength and " + playerGets + " points, now you have " + playerEarns + " points and a random item was added to you item list.")
    // PlayersInfo.inventory.push(randomAdd)
    PlayersInfo.inventory = PlayersInfo.inventory + " gun";
    walk()
}

function playerDies(){
    isAlive = false
    console.log("Looks like you wont be making it to your destination after all, your dead! GAME OVER");
    process.exit()
} 
}

