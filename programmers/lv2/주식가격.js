function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    if (stack.length > 0) {
      let top = stack[stack.length - 1];
      while (prices[top] > prices[i]) {
        const idx = stack.pop();
        answer[idx] = i - idx;
        top = stack[stack.length - 1];
      }
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const idx = stack.pop();
    answer[idx] = prices.length - 1 - idx;
  }

  return answer;
}
