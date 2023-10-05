const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];

const arr = input.slice(1).sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < n; i++) {
  answer += arr[i] + '\n';
}

console.log(answer);
