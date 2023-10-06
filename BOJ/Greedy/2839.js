const fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString());
let answer = 0;

if (n % 5 === 0) {
  answer += n / 5;
} else {
  while (n > 0 && n % 5 != 0) {
    n -= 3;
    answer++;
  }
  if (n < 0) answer = -1;
  else answer += n / 5;
}
console.log(answer);
