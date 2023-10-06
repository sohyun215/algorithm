const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b] = input.map(Number);
let answer = 0;

while (a != b && a < b) {
  if (b % 2 === 0) {
    b /= 2;
  } else if (b % 10 === 1) b = parseInt(b / 10);
  else break;
  answer++;
}
if (a != b) console.log(-1);
else console.log(answer + 1);
