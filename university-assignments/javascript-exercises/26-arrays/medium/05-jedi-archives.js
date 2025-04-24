function findYoda(arr){
    if(arr.find((element) => element === 'Yoda')){
        return 'Master found!'
    } else {
        return 'Master not found.'
    }
}

console.log(findYoda(['Luke', 'Obi-Wan', 'Yoda', 'Anakin']))
console.log(findYoda(['Luke', 'Obi-Wan', 'Yosda', 'Anakin']))