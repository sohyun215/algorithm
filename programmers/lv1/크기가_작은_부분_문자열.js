// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let str = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    str.push(t.slice(i, i + p.length));
  }
  return str.filter((e) => e <= p).length;
}
