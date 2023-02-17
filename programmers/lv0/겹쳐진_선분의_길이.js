// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  let answer = 0;
  let rangeObj = {};
  for (let i = 0; i < 3; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      let range = j.toString() + (j + 1).toString();
      if (rangeObj[range] === undefined) {
        rangeObj[range] = 0;
      } else {
        rangeObj[range]++;
      }
    }
  }
  for (o in rangeObj) {
    if (rangeObj[o] != 0) {
      answer++;
    }
  }
  return answer;
}
