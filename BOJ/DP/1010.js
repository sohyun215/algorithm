const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);

const dp = [];
for (let i = 1; i <= 30; i++) {
  dp.push(Array(i).fill(1));
}
dp[0][0] = 1;

for (let i = 1; i < 30; i++) {
  for (let j = 0; j < i; j++) {
    if (j === 0) dp[i][j] = i + 1;
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

for (let i = 1; i <= tc; i++) {
  const [n, m] = input[i].split(' ').map(Number);
  console.log(dp[m - 1][n - 1]);
}
