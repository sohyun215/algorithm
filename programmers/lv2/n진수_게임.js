function solution(n, t, m, p) {
  let answer = '';
  let num = 0;
  let idx = 0;
  while (idx < t * m) {
    const str = num.toString(n);
    for (let i = 0; i < str.length; i++) {
      idx += 1;
      if (idx % m === p % m) answer += str[i];
      if (idx === t * m) break;
    }
    num += 1;
  }

  return answer.toUpperCase();
}
