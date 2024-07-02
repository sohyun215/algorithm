const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
const dp = Array(n).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = arr[2] + Math.max(arr[0], arr[1]);

function getMaxScore(step) {
  if (dp[step] !== 0) {
    return dp[step];
  }

  // 이전 계단, 3번째 전 계단 밟은 경우 or 이전 계단 안밟고 2번째 전 계단 밟은 경우 중 최댓값
  dp[step] = arr[step] + Math.max(getMaxScore(step - 2), getMaxScore(step - 3) + arr[step - 1]);

  return dp[step];
}

console.log(getMaxScore(n - 1));
