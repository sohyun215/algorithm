const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let visited = [];
function dfs() {
  if (n === visited.length) {
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
