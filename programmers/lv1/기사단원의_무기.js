// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 약수 구하기

function solution(number, limit, power) {
  let num = [];
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j * j <= i; j++) {
      if (j * j === i) cnt++;
      else if (i % j === 0) cnt += 2;
    }
    num.push(cnt > limit ? power : cnt);
  }

  return num.reduce((acc, cur) => acc + cur);
}
