function solution(land) {
  const dp = [];
  for (let i = 0; i < land.length; i++) {
    dp.push([]);

    for (let j = 0; j < 4; j++) {
      dp[i].push(land[i][j]);
      if (i === 0) continue;

      let max = 0;
      for (let k = 1; k < 4; k++) {
        max = Math.max(max, dp[i - 1][(j + k) % 4]);
      }
      dp[i][j] += max;
    }
  }

  return Math.max(...dp[land.length - 1]);
}
