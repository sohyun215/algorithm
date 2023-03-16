// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  let answer = '';
  const xNum = {}, yNum = {};
  [...X].forEach(x => {
    if(x in xNum)   xNum[x]++;
    else xNum[x] = 1;
  });
  [...Y].forEach(y => {
    if(y in yNum)   yNum[y]++;
    else yNum[y] = 1;
  });
  for(const x in xNum){
    for(const y in yNum){
      if(x === y) answer += x.toString().repeat(Math.min(xNum[x], yNum[y]));
    }
  }
  if(answer === "")   answer = '-1';
  if(Number(answer) === 0)    answer = '0';
  return [...answer].sort((a, b) => b - a).join('');
}