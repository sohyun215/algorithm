const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
let answer = '';

dfs();
console.log(answer);

function dfs() {
  if (result.length === m) {
    answer += result.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    dfs();
    result.pop();
  }
}
