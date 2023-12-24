function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isCorrect(rotated)) answer += 1;
  }
  return answer;
}

function isCorrect(s) {
  const stack = [];
  const pair = { '}': '{', ']': '[', ')': '(' };
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (['(', '{', '['].includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (stack.pop() !== pair[arr[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
