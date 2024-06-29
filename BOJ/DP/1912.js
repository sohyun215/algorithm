const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = Array.from({ length: n }, (_, idx) => arr[idx]);
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
}

console.log(Math.max(...dp));
