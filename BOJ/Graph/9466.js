const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
for (let i = 0; i < tc * 2; i += 2) {
  const n = Number(input[i + 1]);
  const arr = [0, ...input[i + 2].split(' ').map(Number)];
  const visited = Array(n + 1).fill(false);
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (result.includes(i)) continue;
    dfs(arr, i, i, visited, result);
  }
  console.log(n - result.length);
}

function dfs(arr, start, cur, visited, result) {
  if (visited[cur] && cur === start) {
    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) result.push(i);
    }
  }
  if (!visited[cur]) {
    visited[cur] = true;
    dfs(arr, start, arr[cur], visited, result);
    visited[cur] = false;
  }
}
