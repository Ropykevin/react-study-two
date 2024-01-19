// Complete the getReactVersion method such that it returns the current installed version of React.

import React from "react"

function getReactVersion() {
    return React.version
}

// sample usage (do not modify)
console.log(getReactVersion());


const element = document.createElement("h2");

// this creates: <h2></h2>
// which you can then insert in the DOM:
document.body.appendChild(element);

console.dir(element)


// most important
// id
// style
// className

// Recap
// const element = document.createElement(tagName) creates an HTML element
// element.style = "background-color: blue" sets the background - color to blue
// element.className = "container" sets the class of the element to: container
// multiple classes can be set by separating them with a space character: element.className = "container center"


// Complete the function createCard such that it 
// returns a < div class="card" ></div > element(not an HTML string)

function createCard() {
    const element = document.createElement('div')
    element.className = "card"
    return element

}

// sample usage (do not modify)
console.log(createCard());

