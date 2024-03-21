const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const visited = [];

function dfs(start) {
  if (visited.length === m) {
    console.log(visited.join(' '));
    return;
  }
  for (let i = start; i <= n; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    dfs(i + 1);
    visited.pop();
  }
}

dfs(1);
