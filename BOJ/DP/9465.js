const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
let line = 1;
for (let i = 1; i <= tc; i++) {
  const n = Number(input[line]);
  const arr = [];
  for (let j = 1; j <= 2; j++) {
    arr.push(input[line + j].split(' ').map(Number));
  }
  const dp = [];
  for (let j = 0; j < 2; j++) dp.push(Array(n).fill(0));
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  dp[0][1] = dp[1][0] + arr[0][1];
  dp[1][1] = dp[0][0] + arr[1][1];

  for (let j = 2; j < n; j++) {
    dp[0][j] = arr[0][j] + Math.max(dp[1][j - 1], dp[1][j - 2]);
    dp[1][j] = arr[1][j] + Math.max(dp[0][j - 1], dp[0][j - 2]);
  }

  let answer = Math.max(dp[0][n - 1], dp[1][n - 1]);
  console.log(answer);
  line += 3;
}
