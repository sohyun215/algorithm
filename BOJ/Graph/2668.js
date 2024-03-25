const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = [0];
const visited = Array(n + 1).fill(false);
const finished = Array(n + 1).fill(false);
const result = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

function dfs(arr, cur, visited, finished, result) {
  visited[cur] = true;
  let next = arr[cur];
  if (!visited[next]) {
    dfs(arr, next, visited, finished, result);
  } else if (!finished[next]) {
    while (cur !== next) {
      result.push(next);
      next = arr[next];
    }
    result.push(cur);
  }
  finished[cur] = true;
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(arr, i, visited, finished, result);
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));
