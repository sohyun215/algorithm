// https://school.programmers.co.kr/learn/courses/30/lessons/120878

const gcd = (a, b) => {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
};
const isPrime = (a) => {
  if (a === 1) return false;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  return true;
};
function solution(a, b) {
  let gcdAB = gcd(a, b);
  a /= gcdAB;
  b /= gcdAB;
  let divisor = [];
  for (let i = 2; i <= b; i++) {
    if (b % i === 0) {
      if (isPrime(i)) divisor.push(i);
    }
  }
  return divisor.filter((d) => d != 2 && d != 5).length > 0 ? 2 : 1;
}
