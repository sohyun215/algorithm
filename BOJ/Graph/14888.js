const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const operatorCnt = input[2].split(' ').map(Number); // [덧셈 뺄셈 곱셈 나눗셈] 순서

let max = -1e9;
let min = 1e9;
const result = [];

function dfs() {
  if (result.length === n - 1) {
    let ans = arr[0];
    for (let i = 0; i < n - 1; i++) {
      if (result[i] === 0) ans += arr[i + 1];
      else if (result[i] === 1) ans -= arr[i + 1];
      else if (result[i] === 2) ans = ans * arr[i + 1];
      else ans = parseInt(ans / arr[i + 1]); // ans = ~~(ans / arr[i + 1]) 도 가능하다. (~~는 소수점 버리는 역할과 동일)
    }

    min = Math.min(min, ans);
    max = Math.max(max, ans);

    return;
  }
  for (let i = 0; i < 4; i++) {
    if (operatorCnt[i] <= 0) continue;
    operatorCnt[i] -= 1;
    result.push(i);
    dfs();
    result.pop();
    operatorCnt[i] += 1;
  }
}

dfs();
console.log(String(max));
console.log(String(min));
