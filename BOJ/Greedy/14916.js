const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let count = 0;
if (input === 1 || input === 3) {
  console.log(-1);
  return;
}
if (input % 5 === 1 || input % 5 === 3) {
  count += parseInt(input / 5) - 1;
  input -= count * 5;
} else {
  count += parseInt(input / 5);
  input %= 5;
}
count += input / 2;
console.log(count);
