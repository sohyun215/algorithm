function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (target <= arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (target < arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end;
}

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const n = Number(input[0]);
const cards = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const arr = input[3].split(' ').map(Number);

let answer = '';

for (const a of arr) {
  const cnt = upperBound(cards, a, 0, n) - lowerBound(cards, a, 0, n);
  answer += cnt + ' ';
}
console.log(answer);
