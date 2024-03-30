const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = i - 1; j >= 0; j--) {
    if (arr[i] < arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
