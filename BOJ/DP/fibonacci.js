function fibo(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
}

let d = new Array(100).fill(0);
function fiboByTopDown(x) {
  if (x === 1 || x === 2) {
    return 1;
  }

  if (d[x] != 0) {
    return d[x];
  }
  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
}

// Bottom-up 방식
let dp = new Array(100).fill(0);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= 99; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
