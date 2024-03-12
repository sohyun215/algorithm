const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let n = Number(input[0]);
const meetings = [];
for (let i = 0; i < n; i++) {
  const [start, end] = input[i + 1].split(' ').map(Number);
  meetings.push([start, end]);
}
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 1;
let endTime = meetings[0][1];
for (let i = 1; i < n; i++) {
  if (meetings[i][0] >= endTime) {
    answer += 1;
    endTime = meetings[i][1];
  }
}
console.log(answer);
