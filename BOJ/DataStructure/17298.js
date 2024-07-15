const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const stack = [0]; // 원소의 인덱스를 저장할 스택
const answer = Array(n).fill(-1);

for (let i = 1; i < n; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    // (스택 상단에 있는 인덱스로 접근한 원소)보다 현재 보고있는 원소가 큰 경우: 현재 보고 있는 원소가 스택에 있는 원소의 오큰수가 된다.
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));
