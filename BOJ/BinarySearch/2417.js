const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let start = 0;
let end = n;
let result = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  if (mid ** 2 >= n) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
