const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [k, n] = input[0].split(' ').map(Number);

let lan = [];
for (let i = 1; i <= k; i++) {
  lan.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...lan);
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cnt = 0;
  for (let i of lan) {
    cnt += parseInt(i / mid);
  }
  if (cnt < n) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
