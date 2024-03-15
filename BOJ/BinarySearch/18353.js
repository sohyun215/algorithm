const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let answer = [arr[0]];
for (let i = 0; i < arr.length; i++) {
  if (answer[answer.length - 1] > arr[i]) {
    answer.push(arr[i]);
  } else {
    let start = 0,
      end = answer.length - 1;
    while (start <= end) {
      const mid = parseInt((start + end) / 2);
      if (arr[i] < answer[mid]) start = mid + 1;
      else end = mid - 1;
    }
    answer[start] = arr[i];
  }
}

console.log(n - answer.length);
