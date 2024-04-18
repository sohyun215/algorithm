const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalCnt = input.length;
let tree = new Map();
for (let i = 0; i < totalCnt; i++) {
  if (tree.has(input[i])) {
    tree.set(input[i], tree.get(input[i]) + 1);
  } else tree.set(input[i], 1);
}

for (const [t, c] of tree) {
  const ratio = ((c / totalCnt) * 100).toFixed(4);
  tree.set(t, ratio);
}

tree = Array.from(tree).sort();
let answer = '';
for (const [t, r] of tree) {
  answer += `${t} ${r}\n`;
}
console.log(answer);
