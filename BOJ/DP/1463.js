const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const dp = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1];

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[parseInt(i / 3)]);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[parseInt(i / 2)]);
  }

  dp[i] += 1;
}

console.log(dp[n]);
