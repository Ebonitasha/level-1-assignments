var pplNames = ["Eboni", "Terrence", "Eriyah", "Zara", "Allie"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var capsLetters = alphabet.toUpperCase()
console.log(capsLetters)
var splitLetters = capsLetters.split("")
console.log(splitLetters)
var newArray = (pplNames,splitLetters)
    // FUNCTION
function forception(pplNames,splitLetters){ 
    for (let i = 0; i < pplNames.length; i++){
        newArray.push(pplNames[i])
           // NESTED LOOP
    for (let j = 0; j < splitLetters.length; i++){
        newArray.push(splitLetters[j])
    }    
}
}
      console.log(newArray)
    
// var firstCode = pplNames.slice(0,1)
// var eboni = firstCode.concat(splitLetters)
// console.log(eboni)

// var secondCode = pplNames.slice(1,2)
// var Terrence = secondCode.concat(splitLetters)
// console.log(Terrence)

// var thirdCode = pplNames.slice(2,3)
// var eriyah = thirdCode.concat(splitLetters)
// console.log(eriyah)

// var forthCode = pplNames.slice(3,4)
// var fifthCode = pplNames.slice(4,5)

    
