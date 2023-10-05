const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const wordSet = new Set();
for (let i = 1; i <= n; i++) {
  wordSet.add(input[i]);
}
const word = Array.from(wordSet);

word.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  } else return a.length - b.length;
});

let answer = '';
for (const w of word) {
  answer += w + '\n';
}
console.log(answer);
