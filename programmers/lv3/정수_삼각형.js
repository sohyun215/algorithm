function solution(triangle) {
  const height = triangle.length;
  const root = triangle[0][0];

  // dp[i][j]: (i, j)까지의 최댓값
  const dp = [[root]];
  for (let i = 1; i < height; i++) {
    dp.push([]);
    for (let j = 0; j < i + 1; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 1; i < height; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j];
      else if (j === i) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
      dp[i][j] += triangle[i][j];
    }
  }

  return Math.max(...dp[height - 1]);
}
