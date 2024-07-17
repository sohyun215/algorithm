const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const aMap = new Map();
for (const a of arr) {
  if (aMap.has(a)) {
    aMap.set(a, aMap.get(a) + 1);
  } else aMap.set(a, 1);
}

const answer = Array(n).fill(-1);
const stack = [];
for (let i = 0; i < n; i++) {
  while (
    stack.length > 0 &&
    aMap.get(arr[stack[stack.length - 1]]) < aMap.get(arr[i])
  ) {
    answer[stack.pop()] = arr[i];
  }

  stack.push(i);
}

console.log(answer.join(' '));
