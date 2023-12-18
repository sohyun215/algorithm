function solution(n, words) {
  const existing = [];
  for (let i = 0; i < words.length; i++) {
    if (
      existing.includes(words[i]) ||
      words[i].length === 1 ||
      (i !== 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0])
    ) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
    existing.push(words[i]);
  }
  return [0, 0];
}
