// https://www.acmicpc.net/problem/1343 (폴리오미노)

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(".");
let answer = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] != " ") {
    let len = input[i].length;
    if (len % 2 === 0) {
      answer += "AAAA".repeat(parseInt(len / 4));
      len %= 4;
      answer += "BB".repeat(len / 2);
    } else {
      console.log(-1);
      return;
    }
    if (i != input.length - 1) answer += ".";
  } else answer += ".";
}

console.log(answer);
