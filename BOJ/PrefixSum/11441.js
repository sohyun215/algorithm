const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const prefixSum = [0];
let sum = 0;
for (let a of arr) {
  sum += a;
  prefixSum.push(sum);
}

const m = Number(input[2]);
let answer = '';

for (let i = 3; i < m + 3; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  answer += prefixSum[b] - prefixSum[a - 1] + '\n';
}
console.log(answer);
