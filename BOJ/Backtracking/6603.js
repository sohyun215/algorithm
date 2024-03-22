const LOTTO_CNT = 6;
function dfs(s, start, visited) {
  if (visited.length === LOTTO_CNT) {
    for (let i = 0; i < LOTTO_CNT; i++) {
      answer += s[visited[i]] + ' ';
    }
    answer += '\n';
    return;
  }

  for (let i = start; i < s.length; i++) {
    if (visited.includes(i)) continue;
    visited.push(i);
    dfs(s, i + 1, visited);
    visited.pop();
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
for (let i = 0; i < input.length; i++) {
  if (input[i] === '0') return;
  const [k, ...s] = input[i].split(' ').map(Number);
  answer = '';
  dfs(s, 0, []);
  console.log(answer);
}
