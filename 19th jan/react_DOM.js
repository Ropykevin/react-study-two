// Makes ui visible in the browser
// ReactDOM is the glue between React and the DOM.
// ReactDOM is separate from React because you can write React for native applications.
// Reconciliation is the process of syncing the Virtual DOM to the actual DOM.
import React from "react";
import { createRoot } from "react-dom/client";

const root3 = document.querySelector("#root");
createRoot(root3).render(React.createElement("p", {}, "Hello World"));

// This will show you a < p > Hello World</p > on your screen because the createRoot().render() method from ReactDOM receives a React Element(a virtual representation) and then makes it visible in the actual DOM.
//     Let's break the code down:

// We start by getting a reference to the root element from the page(using querySelector or getElementById).
// We create the root of the React app using createRoot(root).
// On the result of createRoot(root), we call.render() and pass to it our React element

// Install ReactDOM with npm install react - dom
// Import ReactDOM's createRoot method with import {createRoot} from "react-dom/client"
// ReactDOM weighs 130KB when imported.
// The root element is where ReactDOM will render your UI
// createRoot(root).render(element);

// ReactDOM I 

// Render the element variable on the page inside the given root in the index.html page.
// When an index.html file is available, you can see the output of your code by clicking on the Browser tab.You can try it already in this challenge!

// Also make sure to check the code inside the index.html file so that you can get the id of the root element

import React from "react";
import { createRoot } from "react-dom/client";

const element2 = React.createElement("p", {}, "Hello World");
const proot = document.querySelector("#react-root"); // Use # to select by ID
createRoot(proot).render(element2);

// Render an < h1 > Online Supermarket</h1 > on the page inside the given root.
import React from "react";
import { createRoot } from "react-dom/client";

const element1 = <h1>Online Supermarket</h1>
const root1 = document.getElementById("react-root")

createRoot(root1).render(element1)


// Render an < h1 class="title" > Online Supermarket</h1 > on the page inside the given root.

import React from "react";
import { render } from "react-dom";

const element = <h1 className="title">Online Supermarket</h1>;

const root = document.getElementById("react-root");
render(element, root);

