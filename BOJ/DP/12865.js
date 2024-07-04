const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((i) => i.split(' ').map(Number));

// dp[i][j]: 버틸 수 있는 무게가 j이고 i번째 물건까지 판단했을 때 배낭에 있는 물건들 가치의 최댓값
const dp = Array.from({ length: n + 1 }, (_) => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const [weight, value] = arr[i - 1];
  for (let j = 1; j <= k; j++) {
    if (weight > j) dp[i][j] = dp[i - 1][j];
    else dp[i][j] = Math.max(dp[i - 1][j], value + dp[i - 1][j - weight]);
  }
}

console.log(dp[n][k]);
