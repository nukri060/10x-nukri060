function getValidInput() {
    let userInput;

    do {
        userInput = prompt("Enter a number between 1 and 10:");
        userInput = Number(userInput); 
    } while (isNaN(userInput) || userInput < 1 || userInput > 10);

    return userInput;
}

console.log("Valid input received:", getValidInput());
