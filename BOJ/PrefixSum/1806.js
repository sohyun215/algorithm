const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const prefixSum = Array(n + 1).fill(0);
let minLen = n;
for (let i = 0; i < n; i++) {
  prefixSum[i + 1] = prefixSum[i] + arr[i];
}

let start = 0,
  end = 1;
while (start <= end && end <= n) {
  let sum = prefixSum[end] - prefixSum[start];
  if (sum < s) {
    end += 1;
  } else {
    let len = end - start;
    minLen = Math.min(minLen, len);
    start += 1;
  }
}

if (minLen === n && prefixSum[n] !== s) console.log(0);
else console.log(minLen);
