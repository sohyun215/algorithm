const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

function dfs(n, visited, answer) {
  const OPERATOR = ['+', '-', ' '];
  if (visited.length === n - 1) {
    let exp = '';
    for (let i = 1; i <= n - 1; i++) {
      exp += i + visited[i - 1];
    }
    exp += n;

    if (eval(exp.split(' ').join('')) === 0) {
      answer.push(exp);
    }
    return;
  }
  for (let i = 0; i < 3; i++) {
    visited.push(OPERATOR[i]);
    dfs(n, visited, answer);
    visited.pop();
  }
}

for (let i = 1; i <= n; i++) {
  let answer = [];
  dfs(Number(input[i]), [], answer);
  console.log(answer.sort().join('\n') + '\n');
}
