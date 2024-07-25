/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const p of s) {
    if (stack.length > 0) {
      const top = stack.length - 1;
      if (
        (p === ')' && stack[top] !== '(') ||
        (p === ']' && stack[top] !== '[') ||
        (p === '}' && stack[top] !== '{')
      ) {
        return false;
      }
      if (p === ')' || p === ']' || p === '}') stack.pop();
      else stack.push(p);
    } else stack.push(p);
  }

  return stack.length === 0;
};
