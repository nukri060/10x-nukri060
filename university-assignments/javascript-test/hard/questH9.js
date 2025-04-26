/*Quest H9 – Node Catalog
Difficulty: Hard (5 pts)

Story
You need to catalog nodes by index and uppercase name for reporting.
Objective
Use map with an arrow function and template literals to build an array of labels.

Instructions
1. Name your file questH9.js
2. Create a constant nodes = ['core', 'grid', 'relay']
3. Use map on nodes with (name, idx) => ${idx + 1}. ${name.toUpperCase()}and store inlabels

Print exactly:
• Node list: 1. CORE, 2. GRID, 3. RELAY

Acceptance Criteria
• labels equals ["1. CORE", "2. GRID", "3. RELAY"]
• The console shows exactly: Node list: 1. CORE, 2. GRID, 3. RELAY*/

const nodes = ['core', 'grid', 'relay'];

const labels = nodes.map((name, index) => `${index+1}. ${name.toUpperCase()}`);

output = "";

labels.forEach((label) => {
    output += `${label}, `
})

console.log(`This is questH9: ${output}`);

