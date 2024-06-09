function solution(begin, target, words) {
  const queue = [];
  const wordLength = begin.length;
  const visited = Array(wordLength).fill(false);

  queue.push([begin, 0]);

  while (queue.length > 0) {
    const [word, cnt] = queue.shift();

    if (word === target) return cnt;

    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      const matchCnt = [...word].filter((e, idx) => e === words[i][idx]).length;

      // 알파벳 한 개만 달라야 함
      if (matchCnt !== wordLength - 1) continue;

      visited[i] = true;
      queue.push([words[i], cnt + 1]);
    }
  }

  return 0;
}
