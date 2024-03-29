const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
const dp = [1, 1, 1];

for (let i = 3; i < 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= tc; i++) {
  console.log(dp[Number(input[i]) - 1]);
}
