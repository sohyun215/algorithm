// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  let sArr = [...s].sort();
  let uniqueArr = [];
  let duplicatedArr = [];
  for (let i = 0; i < sArr.length; i++) {
    if (!uniqueArr.includes(sArr[i])) {
      uniqueArr.push(sArr[i]);
    } else {
      duplicatedArr.push(sArr[i]);
    }
  }
  return uniqueArr.filter((e) => !duplicatedArr.includes(e)).join("");
}
