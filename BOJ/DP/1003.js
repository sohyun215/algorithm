const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  const n = Number(input[i]);
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  if (n === 0) console.log(1, 0);
  else console.log(fibo[n - 1], fibo[n]);
}
