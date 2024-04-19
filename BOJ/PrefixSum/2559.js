const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const prefixSum = Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  prefixSum[i + 1] = prefixSum[i] + arr[i];
}

let max = -10000000;
for (let i = k; i <= n; i++) {
  max = Math.max(max, prefixSum[i] - prefixSum[i - k]);
}
console.log(max);
