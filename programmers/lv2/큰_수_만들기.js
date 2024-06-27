function solution(number, k) {
  const len = number.length;

  let answer = [number[0]];
  let removed = 0;

  for (let i = 1; i < len; i++) {
    while (answer[answer.length - 1] < number[i] && removed < k) {
      removed += 1;
      answer.pop();
    }
    answer.push(number[i]);
  }

  return answer.slice(0, len - k).join('');
}
