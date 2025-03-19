function batman(){
    function identity(){
        return `I am Batman!`;
    }

    return identity;
}

const batmansSecrets = batman();
console.log(batmansSecrets());