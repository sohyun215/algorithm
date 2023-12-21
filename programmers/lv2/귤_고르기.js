function solution(k, tangerine) {
  let answer = 0;
  const size = {};
  for (const t of tangerine) {
    if (t in size) size[t] += 1;
    else size[t] = 1;
  }
  const sizeArr = Object.values(size);
  sizeArr.sort((a, b) => b - a);
  for (let i = 0; i < sizeArr.length; i++) {
    k -= sizeArr[i];
    answer += 1;
    if (k <= 0) break;
  }
  return answer;
}
