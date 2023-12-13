function solution(n) {
  let answer = n + 1;
  const nCount = n.toString(2).split('1').length - 1;
  while (true) {
    const aCount = answer.toString(2).split('1').length - 1;
    if (nCount === aCount) break;
    answer += 1;
  }
  return answer;
}
