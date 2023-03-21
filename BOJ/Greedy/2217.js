const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input.sort((a, b) => a - b);
let max = input[0] * n;
for (let i = 1; i < n; i++) {
  if (max < input[i] * (n - i)) max = input[i] * (n - i);
}
console.log(max);
