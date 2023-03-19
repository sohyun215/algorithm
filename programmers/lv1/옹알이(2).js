// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  let answer = 0;
  const possible = ["aya", "ye", "woo", "ma"];
  const notPossible = ["ayaaya", "yeye", "woowoo", "mama"];
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < possible.length; j++) {
      if (!babbling[i].includes(notPossible[j]))
        babbling[i] = babbling[i].replaceAll(possible[j], " ");
    }
    if (babbling[i].trim() === "") answer++;
  }
  return answer;
}
