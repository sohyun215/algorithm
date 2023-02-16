// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  let id_correct = db.filter((e) => e[0] === id_pw[0]);
  return id_correct.length === 0
    ? "fail"
    : id_correct[0][1] === id_pw[1]
    ? "login"
    : "wrong pw";
}
