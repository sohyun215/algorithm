// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 0;
  let wall = new Array(n).fill(1);
  section.forEach((e) => (wall[e - 1] = 0));
  while (wall.includes(0)) {
    let len = wall.length;
    for (let i = 0; i < len; i++) {
      if (!wall[i]) {
        for (let j = 0; j < m; j++) {
          if (!wall[i + j]) wall[i + j] = 1;
        }
        answer++;
      }
    }
  }
  return answer;
}
