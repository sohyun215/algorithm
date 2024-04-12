const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);

const dp = [1, 2, 4];
for (let i = 3; i < 11; i++) {
  dp.push(dp[i - 3] + dp[i - 2] + dp[i - 1]);
}

for (let i = 1; i <= tc; i++) {
  const n = Number(input[i]);
  console.log(dp[n - 1]);
}
