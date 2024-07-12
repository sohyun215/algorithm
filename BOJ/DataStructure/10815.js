const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cards = input[1].split(' ').map(Number);
const arr = input[3].split(' ').map(Number);

const st = new Set();
for (const card of cards) {
  st.add(card);
}
let answer = '';
for (const a of arr) {
  if (st.has(a)) {
    answer += '1 ';
  } else {
    answer += '0 ';
  }
}
console.log(answer);
