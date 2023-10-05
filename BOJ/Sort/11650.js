const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  arr.push({ x, y });
}

arr.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  } else return a.x - b.x;
});

let answer = '';
for (let i = 0; i < n; i++) {
  answer += `${arr[i].x} ${arr[i].y}\n`;
}
console.log(answer);
