const title = <h1 id="brand-title">Supermarket</h1>;
// This is equivalent to the below once converted to JavaScript:


const title1 = React.createElement("h1", { id: "brand-title", className:"main"}, "Supermarket");
// seting class you use ClassName

// Recap
// Attributes in JSX get passed as the 2nd argument of React.createElement(...)
//     < div className = "active" ></div > is how you would give the class active to this element.
// You need quotes around attribute values that are strings.


// Using JSX, render a paragraph that has the class "selected" and an id of "promo" with the text Hello World
import createRoot from "react-dom/client"
const paragraph=<p className="selected" id="promo">Hello</p>
const root = document.querySelector("#react-root")
createRoot(root).render(paragraph)