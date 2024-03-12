const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const tc = Number(input[0]);
const fibo = Array(100000).fill(0);
fibo[1] = 1;

for (let i = 0; i < tc; i++) {
  const result = [];
  let n = Number(input[i + 1]);
  while (n > 0) {
    let j = 2;
    while (true) {
      fibo[j] = fibo[j - 1] + fibo[j - 2];
      if (fibo[j] > n) break;
      j += 1;
    }
    const maxNum = fibo[j - 1];
    result.push(maxNum);
    n -= maxNum;
  }
  const answer = result.reverse().join(' ');
  console.log(answer);
}

/** 다른 풀이: 정수 n의 최대 범위인 1e9의 값보다 작은 피보나치 수들까지 먼저 구함
  const fs = require('fs');
  const input = fs.readFileSync('test.txt').toString().trim().split('\n');

  const tc = Number(input[0]);
  const fibo = [];
  fibo.push(0);
  fibo.push(1);
  let idx = 2;
  while (fibo[fibo.length - 1] < 1e9) {
    fibo.push(fibo[idx - 2] + fibo[idx - 1]);
    idx += 1;
  }

  for (let i = 0; i < tc; i++) {
    const result = [];
    let n = Number(input[i + 1]);
    let j = fibo.length - 1;
    while (n > 0) {
      let maxNum = fibo[j];
      if (maxNum <= n) {
        result.push(maxNum);
        n -= maxNum;
      }
      j -= 1;
    }
    const answer = result.reverse().join(' ');
    console.log(answer);
  }
 */
