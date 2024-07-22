const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];
const stack = [];

for (const p of str) {
  if (stack.length > 0 && p === ')' && stack[stack.length - 1] === '(') {
    stack.pop();
    continue;
  }
  stack.push(p);
}

console.log(stack.length);
