function pokemonFilter(arr){
    return arr.filter((pokemon) => pokemon.CP > 500);
}

console.log(pokemonFilter([ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]));