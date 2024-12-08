var SECRET = "abc123";
var userInput;

function start(){
    while(true){
        userInput = readLine("Enter password: ");

        if(userInput == SECRET){
            println("You got it!");
            break;
        }

        println("Sorry, that did not match. Please try again.");
    }
    
	
}