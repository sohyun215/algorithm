const MOD = 1_000_000_007;
function solution(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    const tmp = dp[i - 1] + dp[i - 2];
    if (tmp >= MOD) {
      dp[i] = tmp % MOD;
    } else dp[i] = tmp;
  }

  return dp[n - 1];
}
