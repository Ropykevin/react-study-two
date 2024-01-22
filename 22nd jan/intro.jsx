
// React uses a special syntax called JSX to solve that issue.
// This JSX syntax may look similar to HTML, but it is NOT HTML.
import React from "react";

const titlee = <h1>Hello World</h1>
// The code above gets translated to the following:

const title = React.createElement("h1", {}, "Hello World");

// JSX with ReactDOM
<div id="root"></div>

import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(<h1>Hello World</h1>);
// Recap
// JSX is a special syntax for React that makes it easier to represent your UI
// JSX looks similar to HTML but it is not HTML
// JSX code you write gets transformed into React.createElement
// JSX is not part of your browser.You need a tool to transform it into valid JavaScript.

// Using JSX, render a paragraph element with the text My first JSX
const root1 = document.querySelector('#react-root')
createRoot(root1).render(<p>My first JSX</p>)