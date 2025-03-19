turnBackTime();

function turnBackTime(){
    console.log(`Going back in time!`);
}

/* The console log will be displayed because the function 
trunBackTime() declaration will be moved to the top of their scope by js interpreter. 
So function declarations are hoisted, so JavaScript can use it even before it's defined in the source code.*/