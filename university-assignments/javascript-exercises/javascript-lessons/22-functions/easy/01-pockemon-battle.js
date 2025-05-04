function compareAttack(pokemon1, attack1, pokemon2, attack2){
    return attack1 > attack2 ? `${pokemon1} is stronger!` : `${pokemon2} is stronger!`;
}

console.log(compareAttack("Pikachu", 55, "Charizard", 84));

