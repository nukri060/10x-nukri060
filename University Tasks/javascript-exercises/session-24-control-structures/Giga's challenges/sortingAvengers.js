function availableAvengers(avengers){
    truthy = [];
    for(let i = 0; i < avengers.length; i++){
        if(Boolean(avengers[i])){
            truthy.push(avengers[i]);
        }
    }

    return truthy;
}

console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]))

// another solution

function availableAvengers(avengers) {
    return avengers.filter(Boolean);
}

console.log(availableAvengers(["Iron Man", "", null, "Thor", undefined]));