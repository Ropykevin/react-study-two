// An expression is any valid JavaScript code that resolves to a value.
// This means it's any JavaScript code that has an end result
// You can use these expressions in JSX by wrapping them with curly brackets {}.

// Basic example

const title = <h1>You have {2 + 3} notifications</h1>;

Variables
// It's often useful to have variables in those expressions, for example, to show the user's name in the navbar:

const user = {
    id: 1,
    name: "Sam"
};

const element = <p className="user-info">Welcome {user.name}!</p>
// This will create a p element with the text: Welcome Sam!.

// Function calls
// You can also call functions inside those expressions, for example:

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";

const element1 = <p className="user-info">Welcome {capitalise(name)}</p>
// which will create a paragraph with the text: Welcome Brendan(notice how the B is uppercased).

// Recap
// An expression is any valid JavaScript code that resolves to a value
// Expressions in JSX need to be wrapped inside curly braces: { expression }
// <h1 className="title">You have {2 + 3} notifications</h1> is an example of JSX with an expression.

// Navbar 

// Complete the getNavbar function such that it returns a div with the message: Logged in as USER.Log out
// Where USER is the name of the user received as an argument.

function getNavbar(user) {
    const mesage = <div>Logged in as {user.name} Log out</div>
    return mesage
}

// sample usage (do not modify)
const element2 = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element);

// Complete the getNotifications function such that it returns a p with the message: You have X new notifications
// Where X is the number of notifications.

function getNotifications(notifications) {
    return <p>You have {notifications.length} new notifications</p>
}

// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];
const element4 = getNotifications(notifications);
console.log(element4);

// Navbar II 

// Complete the getNavbar function such that it returns a div with the message: Logged in as USER.Log out
// Where USER is the first name and last name of the user received as an argument

function getNavbar(user) {
    const name = <div> Logged in as {user.firstName + " " + user.lastName} Log out </div>
    return name
}

// sample usage (do not modify)
const element5 = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});
console.log(element);

// Attribute expression 
// Recap
// If the value of the attribute is a string, then wrap it with quotes
// If the value of the attribute is an expression, then wrap it with curly braces { }
// Number and boolean attribute values should be passed as an expression

// Dynamic class

// Complete the getPaymentButton function such that it returns a button with the text Pay.
// When the user is logged out, 
// it should have the class disabled, and otherwise the class clickable.
function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }

    return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user1 = {
    id: 1,
    is_loggedin: true
}
console.log(getPaymentButton(user1));
