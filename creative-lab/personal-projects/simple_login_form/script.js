const button = document.getElementById("logedin-button");
const userLogin = document.getElementById("login");
const userPass = document.getElementById("password");
const message = document.getElementById("check");

button.addEventListener("click", doSomething);

function doSomething(event) {
    event.preventDefault(); 

    const loginValue = userLogin.value.trim(); 
    const passValue = userPass.value.trim();  

    message.style.display = 'block'; 

    if (loginValue === "nukri" && passValue === "nukri") {
        message.style.color = 'green';
        message.innerHTML = "Hello, Nukri!";
    } else if (loginValue === "" && passValue === "") {
        message.style.color = 'yellow';
        message.innerHTML = "Tip: don't play with the button. Enter the data!";
    } else if (loginValue !== "nukri" || passValue !== "nukri") {
        message.style.color = 'red';
        message.innerHTML = "You have entered the wrong data. Try again.";
    }

    // Set a timeout to hide the message after 6 seconds
    setTimeout(() => {
        message.style.display = 'none';
    }, 2500);
}
