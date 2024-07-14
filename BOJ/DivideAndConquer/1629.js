const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
c = BigInt(c);

function solution(x, n) {
  if (n === 1) {
    return x % c;
  }
  if (n % 2 === 0) {
    const t = solution(x, n / 2);
    return (t * t) % c;
  } else {
    const t = solution(x, (n - 1) / 2);
    return ((x % c) * ((t * t) % c)) % c;
  }
}

console.log(Number(solution(BigInt(a), b)));
