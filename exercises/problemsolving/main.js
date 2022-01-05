const numbers = [2,4,6,8,10,12]

const largerstNum = (values) => {
    let highest = 0;

    for (let i = 0; i < values.length; i+=1){

        if(values[i] > highest){
        highest = values[i];
        }
    }
    return highest;
}
console.log(largerstNum(numbers));

            
let items = ['oranges', 'bread', 'eggs'];

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
      return [ 'milk', ...items ];
    }
  
    return items;
  }
  
  console.log(validateShoppingList(items));



  lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"]);
  
//   function lettersWithStrings(array, x){
//   let matches = []
//   for (let i = 0; i < array.length; i++){
//   let arrayValue = array[i].split("")
//    for (let j = 0; j < arrayValue.length; i++){
//        if (arrayValue [j] == x){
//            matches.push(arrayValue.join(""))
//        }
//    }
//   }
//   return matches;
//   }
//   console.log(lettersWithStrings([["#3", "$$$", "C%4!", "Hey!"],"!"]))

  function lettersWithStrings(array, x) {
    let matches = [];
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i].split('');
        for (let k = 0; k < arrayValue.length; k++) {
            if (arrayValue[k] == x) {
                matches.push(arrayValue.join(''));
            }
        }
    }
    return matches;
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))



let divisible = (num1, num2) => {
    if(num1 % num2 === 0){
        console.log("true")
    }
    else {
        console.log("false")
    }
}
divisible(4, 2)// true
divisible(15, 2)// false
divisible(10, 13)