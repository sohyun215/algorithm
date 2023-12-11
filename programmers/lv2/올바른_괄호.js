function solution(s) {
  const stack = [];
  if (s[0] === ')' || s.length % 2 !== 0) return false;
  for (const p of s) {
    if (p === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else {
      stack.push(p);
    }
  }

  return stack.length === 0;
}
