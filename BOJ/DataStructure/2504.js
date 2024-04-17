const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];
const stack = [];

let tmp = 0;
function calc(op) {
  if (stack.length === 0) {
    return false;
  }
  let popped = stack.pop();
  tmp = 0;
  while (popped !== op && stack.length > 0) {
    if (typeof popped !== 'number') {
      return false;
    }
    tmp += popped;
    popped = stack.pop();
  }
  if (stack.length === 0 && popped !== op) {
    return false;
  }
  return true;
}

let flag = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] === ')') {
    if (calc('(')) stack.push(tmp > 0 ? 2 * tmp : 2);
    else {
      flag = false;
      break;
    }
  } else if (str[i] === ']') {
    if (calc('[')) stack.push(tmp > 0 ? 3 * tmp : 3);
    else {
      flag = false;
      break;
    }
  } else {
    stack.push(str[i]);
  }
}

let answer = 0;
if (flag) {
  for (const s of stack) {
    if (typeof s !== 'number') {
      answer = 0;
      break;
    }
    answer += s;
  }
}

console.log(answer);
