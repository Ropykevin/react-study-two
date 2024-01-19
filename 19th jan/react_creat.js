// React.createElement
const relement = React.createElement("h1");
//returns an object similar to this one:
// {
//     type: 'h1',
//         props: { }
// }

// Changing the class/style
// This is where these two methods are similar in terms of syntax:

React.createElement("h1", { className: "center", style: "color: red" })
// Notice that we wrote className instead of class because we're talking about the same properties as the one in the previous lesson.

// A React Element is the smallest building block.
// It's a representation of a small piece of your UI.
// React.createElement returns a React Element
// React.createElement(type, options, children)

    // React Elements I
// Complete the createDivElement function such that it creates a React Element
//  that represents a div with the text Hello World!

import React from "react"
function createDivElement() {
    const element = React.createElement("div", {}, "Hello World")
    return element
}

// sample usage (do not modify)
console.log(createDivElement());


// React Elements II
// Complete the createTitle function such that it creates a React Element that represents
// an h1 with the text Welcome to our supermarket and the class hero-title

import React from "react"
function createTitle() {
    const element = React.createElement("h1", { className: "hero-title" }, "Welcome to our supermarket")
    return element
}

// sample usage (do not modify)
console.log(createTitle());


