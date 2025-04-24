function isSameLoki(loki1, loki2) {
    return loki1 === loki2;
}

let lokiA = { name: "Loki" };
let lokiB = { name: "Loki" };
let lokiC = lokiA;

console.log(isSameLoki(lokiA, lokiB)); 
console.log(isSameLoki(lokiA, lokiC)); 
console.log(isSameLoki({}, {}));       
console.log(isSameLoki(lokiB, lokiB)); 
