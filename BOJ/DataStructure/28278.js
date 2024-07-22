const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const stack = [];
let answer = '';

for (let i = 1; i <= n; i++) {
  let cmd = input[i];
  if (cmd.length > 1) {
    [cmd, x] = input[i].split(' ').map(Number);
  } else cmd = Number(cmd);

  if (cmd === 1) stack.push(x);
  else if (cmd === 2) {
    answer += stack.length > 0 ? stack.pop() : -1;
  } else if (cmd === 3) {
    answer += stack.length;
  } else if (cmd === 4) {
    answer += stack.length === 0 ? 1 : 0;
  } else {
    answer += stack.length > 0 ? stack[stack.length - 1] : -1;
  }

  if (cmd !== 1) answer += '\n';
}
console.log(answer);
