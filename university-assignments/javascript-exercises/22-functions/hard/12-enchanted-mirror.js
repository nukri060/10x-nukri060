function magicMirror(message, transformFunction){
    return `The mirror says: ${transformFunction(message)}`;
}

console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));