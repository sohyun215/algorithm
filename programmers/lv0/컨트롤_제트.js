// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let arr = [];
  s.split(" ").map((e) => {
    if (e === "Z") arr.pop();
    else arr.push(parseInt(e));
  });
  return arr.reduce((a, b) => a + b, 0);
}
