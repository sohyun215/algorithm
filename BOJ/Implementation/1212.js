const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let n = fs.readFileSync(filePath).toString().trim();
let answer = '';
[...n].forEach((e, idx) =>{
  if(idx === 0) answer += parseInt(e).toString(2);
  else  answer += parseInt(e).toString(2).padStart(3,0); 
})
console.log(answer);