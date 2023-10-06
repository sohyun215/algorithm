const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

const coin = [];
for (let i = 1; i <= n; i++) {
  coin.push(Number(input[i]));
}
let answer = 0;
for (let i = coin.length - 1; i >= 0; i--) {
  answer += parseInt(k / coin[i]);
  k %= coin[i];
}
console.log(answer);
