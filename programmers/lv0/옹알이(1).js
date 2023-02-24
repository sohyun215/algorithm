// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  let answer = 0;
  const possible = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < possible.length; j++) {
      // 단어에서 발음할 수 있는 것은 공백으로 바꾼다.
      babbling[i] = babbling[i].replace(possible[j], " ");
    }
    // 바꿀 수 있는 것을 모두 바꾼 후 공백으로만 이루어졌다면 발음할 수 있는 단어
    if ([...babbling[i]].filter((e) => e != " ").length === 0) {
      answer++;
    }
  }
  return answer;
}
