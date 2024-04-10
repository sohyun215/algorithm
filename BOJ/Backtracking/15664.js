const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const visited = Array(n).fill(false);
const result = [];
let answer = '';

dfs(0);
console.log(answer);

function dfs(start) {
  if (result.length === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  let prev = -1;
  for (let i = start; i < arr.length; i++) {
    if (!visited[i] && prev !== arr[i]) {
      visited[i] = true;
      result.push(arr[i]);
      prev = arr[i];
      dfs(i + 1);
      result.pop();
      visited[i] = false;
    }
  }
}
