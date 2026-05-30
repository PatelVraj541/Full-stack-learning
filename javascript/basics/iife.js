function connect() {
    console.log("Connected to the server.");
}
// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately!");
    connect();
})();