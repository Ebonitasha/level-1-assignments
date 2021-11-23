// setting variables to values 
const form = document.addItem
// const lable = document.getElementsByTagName("label")
// const inputTab = document.getElementById("title")
const submit = ("form button")
const list = document.getElementById("list")

// adding addEventListener
form.addEventListener('submit', (e) => {
    e.preventDefault()

// Getting the Layout of the New 
// Items that will be added to the list //
// // function addItem(title)
//             <li>
// //             <div>Milk</div>
// //             <button>edit</button>
// //             <button>X</button>
// //         </li>
const item = document.createElement("li")
// LI DONT NEED A INNERTEXT BECAUSE ITS SET TO THE DIV 
const div = document.createElement('div')
div.innerText = title.value
const editBtn = document.createElement('button')
editBtn.innerText = "edit"
// resets input value 
title.value = "";
// DELETE BUTTON
const delBtn = document.createElement('button')
delBtn.innerText = "X"
delBtn.addEventListener("click", (e) =>{
    list.removeChild(item)
})

item.appendChild(div)
item.appendChild(editBtn)
item.appendChild(delBtn)
list.appendChild(item)

})


