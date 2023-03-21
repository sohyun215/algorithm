const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 1; i < input.length; i += 2) {
  const arr = input[i].split(" ");
  arr.sort((a, b) => a - b);
  console.log(Math.min(...arr), Math.max(...arr));
}
