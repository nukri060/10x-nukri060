function fizzBuzzTwist() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i.toString().includes("3")) {
            console.log("Almost Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzTwist();
