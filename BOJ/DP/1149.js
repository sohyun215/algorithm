const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const dp = [];
const costs = [];

for (let i = 1; i <= n; i++) {
  dp.push(Array(3).fill(1000 * n));
  costs.push(input[i].split(' ').map(Number));
}

// dp[i][j]: i번까지의 집을 j번째 색으로 칠하는 최소 비용
for (let i = 0; i < 3; i++) {
  dp[0][i] = costs[0][i]; // 1번 집을 빨,초,파로 칠하는 비용
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (j !== k) dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + costs[i][j]);
    }
  }
}

console.log(Math.min(...dp[n - 1]));
