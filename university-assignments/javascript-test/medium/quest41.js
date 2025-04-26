/*Quest 41 – Chain Authentication Steps
Difficulty: Medium (3 pts)
Story
Authentication involves two sequential checks. You must run them in order and handle failures.
Objective
Use Promise chaining and error handling to validate steps.

Instructions:
1. Name your file quest41.js
2. Declare two functions returning Promises:
3. checkCredentials resolves with Credentials OK
4. checkPermissions resolves with Permissions OK
5. Chain the calls so that:
6. First, call checkCredentials
7. Then, call checkPermissions
8. Finally, print exactly Auth result: Credentials OK & Permissions OK
9. Add a .catch to print exactly Auth error if any promise rejects

Acceptance Criteria
• Both functions return the specified strings
• Chaining yields the combined message
• The console shows exactly: Auth result: Credentials OK & Permissions OK*/

function checkCredentials(login, password){
    if (login === "nukri" && password === "123"){
        return `Credentials OK`;
    } 

    return `NOT`;
}

function checkPermissions(role){
    if (role === "admin"){
        return `Permissions OK`;
    }

    return `NOT`;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let credentials = checkCredentials("nukri", "123");
    let permission = checkPermissions("admin")
    
    if((credentials === `Credentials OK` && permission === `Permissions OK`)){
        myResolve('OK');
    }else{
        myReject('NO');
    }
});

myPromise.then(checkCredentials).then()



    

