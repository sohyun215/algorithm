function solution(A, B) {
  let answer = 0;
  const round = A.length;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let playedIdx = 0;
  for (let i = 0; i < round; i++) {
    const num = B[playedIdx];
    if (num > A[i]) {
      answer += 1;
      playedIdx += 1;
    }
  }

  return answer;
}
