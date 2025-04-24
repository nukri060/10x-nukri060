class Inventory {
    constructor() {
        this.arr = [];
    }
    
    push(item) {
        this.arr.push(item);
    }

    pop() {
        this.arr.pop();
    }
}

const frodosInventroy = new Inventory();

frodosInventroy.push('Lembas Bread');
frodosInventroy.push('Ring');

console.log(frodosInventroy)

frodosInventroy.pop();
console.log(frodosInventroy);