const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m] = input.map(Number);

let visited = [];
function dfs(cur) {
  if (m === visited.length) {
    console.log(visited.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!visited.includes(i)) {
      visited.push(i);
      dfs();
      visited.pop();
    }
  }
}
dfs();
