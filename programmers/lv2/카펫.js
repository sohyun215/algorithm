function solution(brown, yellow) {
  for (let i = 3; i < brown / 2; i++) {
    for (let j = 3; i >= j; j++) {
      if ((i - 2) * (j - 2) === yellow && i + j - 2 === brown / 2) {
        return [i, j];
      }
    }
  }
}
