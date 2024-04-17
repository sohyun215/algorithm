const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const postfix = input[1];
const op = ['+', '-', '*', '/'];
const num = [];

for (let i = 2; i <= n + 1; i++) {
  num.push(Number(input[i]));
}

const stack = [];

for (let i = 0; i < postfix.length; i++) {
  if (!op.includes(postfix[i])) {
    stack.push(num[postfix.charCodeAt(i) - 65]);
    continue;
  }

  const a = stack.pop();
  const b = stack.pop();

  if (postfix[i] === '+') {
    stack.push(a + b);
  } else if (postfix[i] === '-') {
    stack.push(b - a);
  } else if (postfix[i] === '*') {
    stack.push(a * b);
  } else if (postfix[i] === '/') {
    stack.push(Number(b / a));
  }
}

const answer = stack.pop();
console.log(answer.toFixed(2));
