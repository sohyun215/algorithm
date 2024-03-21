const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const visited = [];
let answer = '';

function dfs(start) {
  if (visited.length === m) {
    answer += visited.join(' ') + '\n';
    return;
  }
  for (let i = start; i <= n; i++) {
    visited.push(i);
    dfs(i);
    visited.pop();
  }
}

dfs(1);
console.log(answer);
