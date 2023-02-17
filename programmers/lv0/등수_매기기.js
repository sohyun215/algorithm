// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  let answer = [];
  let origin = score.map((e) => (e[0] + e[1]) / 2);
  score = score.map((e) => (e[0] + e[1]) / 2);
  let sorted = score.sort((a, b) => b - a);

  let map = new Map();
  for (let i = 0; i < sorted.length; i++) {
    if (map.get(sorted[i]) === undefined) map.set(sorted[i], i + 1);
  }
  map.forEach((value, key) => {
    for (let i = 0; i < origin.length; i++) {
      if (origin[i] === key) {
        answer[i] = value;
      }
    }
  });
  return answer;
}

/*
function solution(score) {
    score = score.map((e) => (e[0] + e[1]) / 2);
    let sorted = [...score].sort((a, b) => b - a);
    
    return score.map(s => sorted.indexOf(s) + 1);
}
*/
