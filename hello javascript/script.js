console.log("Hello world!");

// we target the html button element

// html elements related to the text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");
// html elements related to the color
let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");

//html element related to the target
let target = document.querySelector("#target");

console.log(button);

//we listen to the click on the button
button.addEventListener("click", function() {
//and then we do stuff
console.log(inputName.value);
//we replace the content of the target with the one from the input
target.innerHTML = inputName.value;
})

buttonColor.addEventListener("click", function() {
    // we get the color value
    // then we update the title color
    target.style.color = inputColor.value;
})


/*
    ##################################

            TO DO LIST

    ##################################
*/

// create the link between the html and the js
let buttonToDo = document.querySelector("#toDoButton")
let inputToDo = document.querySelector("#toDoInput")
let toDo = document.querySelector("#toDo")
// listen to the click on the button
buttonToDo.addEventListener("click", function() {
    // get the value of the input
    let currentToDo = inputToDo.value;

    // we create a list element
    // we use the backticks (`) to create a template
    let newLiElement = `<li>${currentToDo}</li>`;

    // we add it inside the ul element
    toDo.innerHTML += newLiElement;
})