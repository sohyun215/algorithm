function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur));
}

function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
