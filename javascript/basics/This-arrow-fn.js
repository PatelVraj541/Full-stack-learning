// In JavaScript, the value of `this` is determined by how a function is called.

// In a regular function, `this` refers to the object that is calling the function. 
// If the function is called in the global scope, `this` refers to the global object (window in browsers).
const user = {
    username: "Vraj",
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to our website!`);
        console.log(this);
        // In this case, `this` refers to the `user` object, so it will log the `user`
    }
}

user.welcomeMessage(); // Output: Welcome Vraj to our website!

console.log(this);
// In an arrow function, `this` is lexically bound, meaning it takes the value of `this` from the surrounding code where the arrow function is defined.

function regularFunction() {
    console.log(this); 
    // In a regular function, `this` refers to the global object (window in browsers)
}

regularFunction(); // Output: [object Window]

const arrowFunction = () => {
    console.log(this); 
}
arrowFunction();

const addtwo = (num1, num2) => num1 + num2;
//implicit return
console.log(addtwo(5, 10)); // Output: 15

const addition = (num1, num2) => {
    return num1 + num2;
}
//explicit return
console.log(addition(5, 10)); // Output: 15