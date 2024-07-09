const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const graph = [];

for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(''));
}

console.log(quad(n, 0, 0));

function quad(n, row, col) {
  let result = '';
  let allZero = true;
  let allOne = true;
  if (n === 1) return graph[row][col]; // 더 이상 나눌 수 없을 때는 바로 리턴

  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (graph[i][j] === '0') allOne = false;
      else allZero = false;
    }
    // 섞인 경우
    if (!allZero && !allOne) break;
  }

  if (!allZero && !allOne) {
    // 왼쪽 위, 오른쪽 위, 왼쪽 아래, 오른쪽 아래 순
    result += '(';
    result += quad(n / 2, row, col);
    result += quad(n / 2, row, col + n / 2);
    result += quad(n / 2, row + n / 2, col);
    result += quad(n / 2, row + n / 2, col + n / 2);
    result += ')';
  } else if (allZero) {
    result += '0';
  } else {
    result += '1';
  }

  return result;
}
