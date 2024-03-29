const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = [];
const dp = [];
for (let i = 1; i <= n; i++) {
  const row = input[i].split(' ').map(Number);
  arr.push(row);
  dp.push(Array(row.length).fill(0));
}

dp[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) dp[i][j] = arr[i][j] + dp[i - 1][j];
    else if (j === i) dp[i][j] = arr[i][j] + dp[i - 1][j - 1];
    else dp[i][j] = arr[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}

console.log(Math.max(...dp[n - 1]));
