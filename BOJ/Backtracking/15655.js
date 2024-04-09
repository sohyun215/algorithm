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

dfs(0);
console.log(answer);

function dfs(start) {
  if (result.length === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (!visited.has(arr[i])) {
      visited.add(arr[i]);
      result.push(arr[i]);
      dfs(i + 1);
      visited.delete(arr[i]);
      result.pop();
    }
  }
}
