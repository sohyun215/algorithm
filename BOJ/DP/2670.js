const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
const dp = [arr[0]];
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] * arr[i], arr[i]);
}

console.log(Math.max(...dp).toFixed(3));
