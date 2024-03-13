const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const str = input[i];
  const flag = checkPalindrome(str);
  if (flag === -1) {
    console.log(0);
  } else {
    const leftIdx = flag;
    const rightIdx = str.length - leftIdx - 1;
    const newStr1 = str.slice(0, leftIdx) + str.slice(leftIdx + 1);
    const newStr2 = str.slice(0, rightIdx) + str.slice(rightIdx + 1);
    if (checkPalindrome(newStr1) === -1 || checkPalindrome(newStr2) === -1) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}

// 회문이면 -1 리턴, 아닌 경우 왼쪽 인덱스 리턴
function checkPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      return left;
    }
  }
  return -1;
}
