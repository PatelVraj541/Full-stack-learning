// object deceleration
// while ceating an object using laterals it is not singleton
// while creating an object using constructor it is singleton

// object literal

const mySym = Symbol("key1");

const jsUser = {
    name: "Vraj",
    "full name": "Vraj Patel",
    [mySym]: "myKey1",
    age: 19,
    location: "vadodara",
    email: "vraj@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

jsUser.email = "vraj@microsoft.com"
// Object.freeze(jsUser);
// jsUser.email = "vraj@outlook.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello, ${this.name}`);
}
console.log(jsUser.greeting());

