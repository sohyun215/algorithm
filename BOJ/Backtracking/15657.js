const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

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
    result.push(arr[i]);
    dfs(i);
    result.pop();
  }
}
