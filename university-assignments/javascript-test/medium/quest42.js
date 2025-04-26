/*Quest 42 – Render Node List
Difficulty: Medium (3 pts)
Story:
You must dynamically display the active node names in the UI.
Objective
Use DOM manipulation and a loop to render list items.

Instructions:
1. Name your file quest42.js
2. Assume an HTML page with an empty <ul id="nodeList"></ul>
3. Create a constant activeNodes set to ['nodeA', 'nodeB', 'nodeC']
4. Select the nodeList element
5. Loop over activeNodes and for each name:
6. Create an li element
7. Set its textContent to the node name
8. Append it to nodeList


Acceptance Criteria
• The ul#nodeList contains exactly three <li> entries with texts:
nodeA
nodeB
nodeC*/

const activeNodes = ['nodeA', 'nodeB', 'nodeC'];

const nodeList = document.getElementById('nodeList');

for (let i of activeNodes){
    let li = document.createElement("li", "sds")
    li.innerText = `${i}`;
    nodeList.appendChild(li);
}