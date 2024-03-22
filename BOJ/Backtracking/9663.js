const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
const visited = [];
let answer = 0;

function isPossible(a, b) {
  for (const [x, y] of visited) {
    if (x === a || y === b) return false;
    if (Math.abs(x - a) === Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth === n) {
    answer += 1;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!isPossible(depth, i)) continue;
    visited.push([depth, i]);
    dfs(depth + 1);
    visited.pop();
  }
}

dfs(0);
console.log(answer);
