const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let answer = 0;
let t = 0;
for (const a of arr) {
  t += a;
  answer += t;
}
console.log(answer);
