const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const visited = [];
let answer = '';
function dfs() {
  if (visited.length === m) {
    answer += visited.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= n; i++) {
    visited.push(i);
    dfs();
    visited.pop();
  }
}

dfs();
console.log(answer);
