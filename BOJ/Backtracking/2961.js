function dfs(start) {
  if (visited.length > 0) {
    let sTotal = 1,
      bTotal = 0;
    for (let i = 0; i < visited.length; i++) {
      sTotal *= sList[visited[i]];
      bTotal += bList[visited[i]];
    }
    let diff = Math.abs(sTotal - bTotal);
    minValue = Math.min(minValue, diff);
  }

  for (let i = start; i < n; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    dfs(i + 1);
    visited.pop();
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const sList = [];
const bList = [];
for (let i = 0; i < n; i++) {
  const [s, b] = input[i + 1].split(' ').map(Number);
  sList.push(s);
  bList.push(b);
}

const visited = [];
let minValue = 1e9;
dfs(0);
console.log(minValue);
