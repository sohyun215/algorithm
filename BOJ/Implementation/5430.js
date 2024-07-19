const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for (let i = 1; i < t * 3; i += 3) {
  const tc = [];
  for (let j = i; j < i + 3; j++) {
    tc.push(input[j]);
  }

  let [fn, n, arr] = tc;
  arr = arr.slice(1, -1).split(',');
  if (arr[0] === '') arr.pop();

  let isError = false;
  let isReversed = false;

  for (let j = 0; j < fn.length; j++) {
    if (fn[j] === 'R') {
      isReversed = !isReversed;
    } else if (fn[j] === 'D') {
      if (arr.length === 0) {
        isError = true;
        break;
      }
      if (isReversed) arr.pop();
      else arr.shift();
    }
  }
  if (isError) {
    console.log('error');
    continue;
  }

  let answer = '[';
  if (isReversed) answer += arr.reverse().join(',');
  else answer += arr.join(',');
  answer += ']';

  console.log(answer);
}
