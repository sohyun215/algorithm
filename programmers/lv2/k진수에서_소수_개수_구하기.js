function solution(n, k) {
  const arr = n.toString(k).split('0');

  return arr.filter((a) => isPrime(Number(a))).length;
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
