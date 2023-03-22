const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let bulb = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
input.forEach((e, idx) => {
  let [cmdNum, l, r] = e.split(" ").map((el) => Number(el));
  if (cmdNum === 1) {
    bulb[l - 1] = r;
  } else if (cmdNum === 2) {
    for (let i = l - 1; i < r; i++) {
      bulb[i] = Number(!bulb[i]);
    }
  } else if (cmdNum === 3) {
    for (let i = l - 1; i < r; i++) {
      bulb[i] = 0;
    }
  } else {
    for (let i = l - 1; i < r; i++) {
      bulb[i] = 1;
    }
  }
});
console.log(bulb.join(" "));
