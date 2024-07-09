const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({ length: n }, (_, idx) => input[idx + 1].split(' '));

let white = 0;
let blue = 0;

function divide(n, row, col) {
  let color = arr[row][col];
  let same = true;
  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (color !== arr[i][j]) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }

  if (same) {
    if (color === '0') white += 1;
    else blue += 1;
  } else {
    divide(n / 2, row, col);
    divide(n / 2, row, col + n / 2);
    divide(n / 2, row + n / 2, col);
    divide(n / 2, row + n / 2, col + n / 2);
  }
}

divide(n, 0, 0);
console.log(white + '\n' + blue);
