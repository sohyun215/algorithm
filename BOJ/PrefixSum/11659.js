const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const prefixSum = [0];
let sum = 0;
for (const a of arr) {
  sum += a;
  prefixSum.push(sum);
}

let answer = '';
for (let i = 2; i <= m + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += prefixSum[b] - prefixSum[a - 1] + '\n';
}

console.log(answer);
