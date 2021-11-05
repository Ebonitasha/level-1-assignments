var changingBox = document.querySelector(".changingBox")
var myDiv = document.querySelector("button")

changingBox.addEventListener("mouseover",firstfunction);
changingBox.addEventListener("mousedown", secondFunction);
changingBox.addEventListener("mouseup", thirdFunction);
changingBox.addEventListener("dblclick", forthFunction);
changingBox.addEventListener("mousewheel", fifthFunction);

function firstfunction() {
    {changingBox.style.background = "blue"};
}

function secondFunction() {
    {changingBox.style.background = "red"};
}

function thirdFunction() {
    {changingBox.style.background = "yellow"};
}

function forthFunction() {
    {changingBox.style.background = "green"}; 
}

function fifthFunction() {
    {changingBox.style.background = "orange"};
}


window.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65"){
        alert('You pressed A')
    } else if (key.keyCode == "82"){
        myDiv.style.backgroundColor = "red"
    }else if (key.keyCode == "66"){
        myDiv.style.backgroundColor = "blue"
    }else if (key.keyCode == "89") {
        myDiv.style.backgroundColor = "yellow"
    }else if (key.keyCode == "71") {
        myDiv.style.backgroundColor = "green"
    }else if (key.keyCode == "79") {
        myDiv.style.backgroundColor = "orange"
    }
}
