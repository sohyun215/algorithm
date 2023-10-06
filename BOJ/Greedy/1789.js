const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let s = Number(input);

let i = 0;
let sum = i;
while (s >= sum) {
  i++;
  sum += i;
}
console.log(i - 1);
