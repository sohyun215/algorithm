const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input.map(Number);

let start = 1,
  end = n ** 2;
let answer = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let cnt = 0;
  // 행마다 mid보다 작은 수의 개수 구하기
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(parseInt(mid / i), n);
  }
  if (cnt >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(answer);
