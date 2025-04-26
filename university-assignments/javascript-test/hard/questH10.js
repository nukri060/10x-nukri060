/*Quest H10 – Threshold Logger
Difficulty: Hard (5 pts)
Story
A nested logger warns only when values exceed a threshold.
Objective
Use nested functions, default parameters, and a loop to log warnings.

Instructions:
1. Name your file questH10.js
2. Create a constant values = [10, 20, 5, 30]
3. Declare createLogger(threshold = 15) that:
4. Declares logValues() which loops over values and for each number > threshold, prints Warning: <number>
5. Returns logValues
6. Call createLogger() to get logger, then call logger()

Acceptance Criteria:
• logger() prints exactly:
• Warning: 20
• Warning: 30*/

const values = [10, 20, 5, 30];

function createLogger(arr, threshold = 15){

    function logValues(){
        for(let i of arr){
            if(i > threshold){
                console.log(i);
            }
        }
    }
    return logValues;
}

const logger = createLogger([10, 20, 5, 30]);

console.log(`This is questH10: call logger() -`)
logger();
