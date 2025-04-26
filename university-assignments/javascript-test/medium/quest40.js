/*Quest 40 – Delegate Alert Handlers
Difficulty: Medium (3 pts)
Story
Multiple buttons trigger the same grid alert. You must avoid duplicate code by using a callback.
Objective
Attach event listeners via a shared handler function.

Instructions:
1. Name your file quest40.js
2. Assume an HTML page with buttons having class alert-btn
3. Declare a function handleAlert that prints exactly Alert triggered
4. Select all alert-btn elements into a list
5. Loop over the list and attach click listeners that call handleAlert

Acceptance Criteria:
• handleAlert logs “Alert triggered”
• All buttons with class alert-btn use the same handler
• Clicking any alert-btn prints exactly:
• Alert triggered*/

console.log(`Quest40 is working!`);
const buttons = document.querySelectorAll(".alert-btn");

for(let i of buttons){
    i.addEventListener("click", handleAlert);
}

function handleAlert(item){
    item.target.style.backgroundColor = "green";
    console.log(`Alert triggered`)
}
