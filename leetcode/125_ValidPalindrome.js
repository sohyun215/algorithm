/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[a-zA-Z0-9]/;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!regex.test(s[left])) {
      left += 1;
      continue;
    } else if (!regex.test(s[right])) {
      right -= 1;
      continue;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      console.log(s[left], s[right], left, right);
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};

// 다른 풀이
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^0-9a-z]/g, '');

  return str.split('').reverse().join('') === str;
};
