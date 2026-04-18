function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Vraj');
sayMyName('Dharmeshbhai');

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log('Addition: ', addTwoNumbers(5, 10));

function LoggedInUserMessage(user) {
    if (!user) {
        console.log("please enter your name");
    } else {
        console.log("Welcome, " + user + "!");
    }
}

LoggedInUserMessage("Vraj");
LoggedInUserMessage("");
LoggedInUserMessage(null);
