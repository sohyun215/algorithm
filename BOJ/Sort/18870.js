const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const sortedArr = [...new Set(arr)].sort((a, b) => a - b);

const dict = {};
for (let i = 0; i < sortedArr.length; i++) {
  dict[sortedArr[i]] = i;
}

let answer = '';
for (const a of arr) {
  answer += dict[a] + ' ';
}
console.log(answer);
