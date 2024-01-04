function solution(citations) {
  let hIndex = Math.max(...citations);
  while (citations.filter((c) => c >= hIndex).length < hIndex) {
    hIndex -= 1;
  }
  return hIndex;
}
