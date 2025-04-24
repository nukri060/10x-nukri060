function treasureMap(arr){
    return arr.map(direction => `Move ${direction}`);
}

console.log(treasureMap(['left', 'right', 'forward']))