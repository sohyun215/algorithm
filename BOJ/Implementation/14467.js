const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let cow = Array(10).fill(-1);
let answer = 0;

input.forEach((e) => {
  const [num, pos] = e.split(" ").map(Number);
  const prev = cow[num - 1];
  if (prev !== -1 && prev != pos) answer++;
  cow[num - 1] = pos;
});

console.log(answer);
