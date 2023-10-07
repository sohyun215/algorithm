const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...arr);
let maxHeight = end;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cut = 0;
  for (let i of arr) {
    cut += i - Math.min(i, mid);
  }
  if (cut === m) {
    maxHeight = mid;
    break;
  } else if (cut < m) {
    end = mid - 1;
  } else {
    maxHeight = mid;
    start = mid + 1;
  }
}
console.log(maxHeight);
