// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  let spell = {};
  const answer = [...s].map((el, idx) => {
    let result = el in spell ? idx - spell[el] : -1;
    spell[el] = idx;
    return result;
  });
  return answer;
}
