function solution(word) {
  let answer = 0;
  const WORD = ['A', 'E', 'I', 'O', 'U'];
  let cnt = 0;
  let result = '';

  function dfs() {
    if (result === word) {
      answer = cnt;
      return;
    }
    if (result.length === 5) {
      return;
    }

    for (let i = 0; i < 5; i++) {
      let prev = result;
      result += WORD[i];
      cnt += 1;
      dfs();
      result = prev;
    }
  }

  dfs();

  return answer;
}
