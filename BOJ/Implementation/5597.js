const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = Array(30).fill(0);
input.forEach((el) => {
  arr[el - 1] = 1;
});
arr.forEach((el, idx) => {
  if (el === 0) console.log(idx + 1);
});
