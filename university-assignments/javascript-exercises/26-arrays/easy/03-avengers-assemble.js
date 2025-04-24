function avengersAssemble(arr){
    return arr.reduce((total, avenger) => total + avenger.budget, 0);
}

console.log(avengersAssemble([ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]))