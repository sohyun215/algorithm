const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const visited = new Set();
const result = [];
let answer = '';

dfs();
console.log(answer);

function dfs() {
  if (result.length === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (const a of arr) {
    if (!visited.has(a)) {
      visited.add(a);
      result.push(a);
      dfs();
      visited.delete(a);
      result.pop();
    }
  }
}
