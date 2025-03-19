function houseChooser() {
    let rand = Math.floor(Math.random() * 4);

    if (rand === 0) {
        return "Gryffindor";
    } else if (rand === 1) {
        return "Slytherin";
    } else if (rand === 2) {
        return "Ravenclaw";
    } else {
        return "Hufflepuff";
    }
}

function sortStudent(name, callback) {
    console.log(`Sorting ${name} into ${callback()}`);
}

sortStudent("Harry", houseChooser);
