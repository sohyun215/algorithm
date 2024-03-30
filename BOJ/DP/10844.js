const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const dp = [];
for (let i = 0; i <= n; i++) {
  dp.push(Array(10).fill(0));
}

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1];
    else if (j === 9) dp[i][j] = dp[i - 1][8];
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    dp[i][j] %= 1e9;
  }
}

console.log(dp[n].reduce((a, b) => a + b) % 1e9);
