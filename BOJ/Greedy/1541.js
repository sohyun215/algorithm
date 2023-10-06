const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = input.split('-');
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  const add = arr[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) {
    answer += add;
  } else answer -= add;
}
console.log(answer);
