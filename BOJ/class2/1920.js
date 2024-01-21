const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const nArr = input[1]
  .split(' ')
  .map((a) => Number(a))
  .sort((a, b) => a - b);
const m = input[2];
const mArr = input[3].split(' ').map((a) => Number(a));

let answer = '';
for (let i = 0; i < m; i++) {
  if (binarySearch(nArr, mArr[i], 0, n - 1) !== -1) {
    answer += '1\n';
  } else {
    answer += '0\n';
  }
}
console.log(answer);

function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  const mid = parseInt((start + end) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}
