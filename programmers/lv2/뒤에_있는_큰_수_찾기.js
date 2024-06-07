function solution(numbers) {
  const len = numbers.length;
  const answer = Array(len).fill(-1);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}
