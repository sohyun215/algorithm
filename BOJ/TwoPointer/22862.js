const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let maxLen = 0;
let end = 0;
let cnt = 0; // 지운 홀수 개수
for (let start = 0; start < n; start++) {
  while (end < n) {
    if (arr[end] % 2 === 0) {
      end++;
    } else {
      if (k === cnt) break;
      cnt++;
      end++;
    }
  }
  maxLen = Math.max(maxLen, end - start - cnt);
  if (arr[start] % 2 !== 0) {
    cnt--;
  }
}
console.log(maxLen);
