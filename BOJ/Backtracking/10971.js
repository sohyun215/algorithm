const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const cities = [];
const visited = [];

for (let i = 0; i < n; i++) {
  cities.push(input[i + 1].split(' ').map(Number));
}

let minCost = 1e9;
function dfs(n, cost, start, cur) {
  if (visited.length === n && cities[cur][start] !== 0) {
    minCost = Math.min(minCost, cost + cities[cur][start]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited.includes(i) || cities[cur][i] === 0) continue;
    visited.push(i);
    dfs(n, cost + cities[cur][i], start, i);
    visited.pop();
  }
}

visited.push(0);
dfs(n, 0, 0, 0);
console.log(minCost);
