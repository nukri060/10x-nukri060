function sortingHat(students) {
    return students.map((x) => `${x} - ${["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)]}`);
}

console.log(sortingHat(['Harry', 'Hermione', 'Ron', 'Draco']));