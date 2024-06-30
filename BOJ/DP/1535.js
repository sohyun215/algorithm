const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const L = input[1].split(' ').map(Number);
const J = input[2].split(' ').map(Number);

// maxPleasure[i][j]: 체력이 j이고, i번째 사람까지 인사할 지 판단했을 때 얻을 수 있는 최대 기쁨
const maxPleasure = Array.from({ length: n + 1 }, () => Array(101).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 100; j++) {
    if (L[i - 1] >= j) {
      // 잃는 체력이 더 많을 때: 이전 사람까지 인사 했을 때 얻을 수 있는 값
      maxPleasure[i][j] = maxPleasure[i - 1][j];
    } else {
      // 인사를 안하거나 하는 경우 중 최댓값 구함
      maxPleasure[i][j] = Math.max(
        maxPleasure[i - 1][j],
        J[i - 1] + maxPleasure[i - 1][j - L[i - 1]],
      );
    }
  }
}

console.log(maxPleasure[n][100]);
