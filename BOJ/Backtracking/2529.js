const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = Number(input[0]);
const arr = input[1].split(' ');
const visited = Array(10).fill(false);
const possibleNum = [];
const result = [];

function dfs(depth, prev) {
  if (depth === k + 1) {
    let answer = '';
    for (const n of result) {
      answer += n;
    }
    possibleNum.push(answer);
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    if (depth > 0 && arr[depth - 1] === '<') {
      if (prev > i) continue;
    }
    if (depth > 0 && arr[depth - 1] === '>') {
      if (prev < i) continue;
    }

    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i);
    visited[i] = false;
    result.pop();
  }
}

dfs(0, 0);

possibleNum.sort((a, b) => a - b);
console.log(possibleNum[possibleNum.length - 1]);
console.log(possibleNum[0]);

/**
 * 모든 값을 저장 후 정렬하지 않고도 최대, 최소 출력할 수 있음 
 * let min = "";
 * let max = "";
 * 
 * if (depth === k + 1) {
    let answer = '';
    for (const n of result) {
      answer += n;
    }
    if(min === "")  min = answer;
    max = answer;
    return;
  }
 * 
 */
