/*Quest H11 – Unique Node Filter
Difficulty: Hard (5 pts)
Story:
Duplicate node reports flood your logs. You must filter unique entries.
Objective
Use filter with an index check to remove duplicates.

Instructions:
1.Name your file questH11.js
2. Create a constant rawNodes = ['A', 'B', 'A', 'C', 'B']
3. Declare uniqueFilter(arr) that returns arr.filter((item, idx, self) => self.indexOf(item) === idx)
4. Call uniqueFilter(rawNodes) into uniqueNodes

Print exactly:
• Unique nodes: A, B, C

Acceptance Criteria:
• uniqueNodes equals ['A', 'B', 'C']
• The console shows exactly: Unique nodes: A, B, C*/

const rawNodes = ['A', 'B', 'A', 'C', 'B'];

function uniqueFilter(arr){
    return arr.filter((item, idx, self) => self.indexOf(item) === idx)
}

const unique = uniqueFilter(rawNodes);
let output = "Unique nodes: ";

for (let i of unique){
    output += `${i}, `
}

console.log(`This is questH11: ${output}`);