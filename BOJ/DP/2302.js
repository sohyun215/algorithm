const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const dp = Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

const group = []; // 각 그룹의 좌석 수 저장
let start = 0;
for (let i = 2; i < m + 2; i++) {
  const vip = Number(input[i]);
  group.push(vip - start - 1);
  start = vip;
}
if (start !== n) group.push(n - start);

let answer = 1;
for (const cnt of group) {
  answer *= dp[cnt];
}
console.log(answer);
