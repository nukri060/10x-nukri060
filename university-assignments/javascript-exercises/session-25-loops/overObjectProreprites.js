function printObjectKeys(obj){
    let property = null;

    for (property in obj){
        console.log(property);
    }
}

printObjectKeys({ name: "Alice", age: 25 });

// or

function printObjectKeys(obj){
    let property = null;

    for (property in obj){
        console.log(obj[property]);
    }
}

printObjectKeys({ name: "Alice", age: 25 });

