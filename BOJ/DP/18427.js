const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, h] = input[0].split(' ').map(Number);
const blocks = [];
const dp = [];
for (let i = 1; i <= n; i++) {
  blocks.push(input[i].split(' ').map(Number));
  blocks[i - 1].push(0);
}
for (let i = 0; i <= n; i++) {
  dp.push(Array(h + 1).fill(0));
}
dp[0][0] = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= h; j++) {
    for (let k = 0; k < blocks[i - 1].length; k++) {
      if (j + blocks[i - 1][k] <= h) {
        dp[i][j + blocks[i - 1][k]] += dp[i - 1][j];
        dp[i][j + blocks[i - 1][k]] %= 10007;
      }
    }
  }
}

console.log(dp[n][h]);
