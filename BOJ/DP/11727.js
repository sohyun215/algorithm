const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const dp = [1, 3];

for (let i = 2; i < 1000; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
}
console.log(dp[n - 1]);
