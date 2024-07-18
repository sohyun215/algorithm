const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const lis = [arr[0]];

for (let i = 1; i < n; i++) {
  if (lis[lis.length - 1] < arr[i]) {
    lis.push(arr[i]);
  } else {
    let start = 0;
    let end = lis.length - 1;
    while (start < end) {
      const mid = parseInt((start + end) / 2);
      if (lis[mid] < arr[i]) start = mid + 1;
      else end = mid;
    }
    lis[end] = arr[i];
  }
}

console.log(lis.length);
