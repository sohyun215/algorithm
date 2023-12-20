function solution(n) {
  const answer = [1, 2];
  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n - 1];
}
