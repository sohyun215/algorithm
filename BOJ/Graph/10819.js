const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let max = 0;
const visited = Array(n).fill(false);
const result = [];

function dfs(depth) {
  if (depth === n) {
    let s = 0;
    for (let i = 1; i < n; i++) {
      s += Math.abs(result[i - 1] - result[i]);
    }
    max = Math.max(max, s);
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(max);
