const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
for (let i = 0; i < tc * 2; i += 2) {
  const n = Number(input[i + 1]);
  const arr = [0, ...input[i + 2].split(' ').map(Number)];
  const visited = Array(n + 1).fill(false);
  const result = [];
  const notTeam = new Set();
  for (let i = 1; i <= n; i++) {
    if (notTeam.has(i)) continue;
    dfs(arr, i, visited, result, notTeam);
  }
  console.log(notTeam.size);
}

function dfs(arr, cur, visited, result, notTeam) {
  // cur: 현재 노드 번호
  if (visited[cur]) {
    if (result.includes(cur)) {
      let prev = result.pop();
      while (prev !== cur) {
        prev = result.pop();
      }
    }
    while (result.length > 0) {
      notTeam.add(result.pop());
    }
  }
  if (!visited[cur]) {
    visited[cur] = true;
    result.push(cur);
    dfs(arr, arr[cur], visited, result, notTeam);
  }
}

/**
 * 사이클 판별 알고리즘에 따라 작성한 코드
 * const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
for(let i = 0; i < tc*2; i += 2) {
  const n = Number(input[i+1]);
  const arr = [0, ...input[i+2].split(' ').map(Number)];
  const visited = new Array(n+1).fill(false);
  const finished = new Array(n+1).fill(false); // 처리완료 여부
  const result = [];
  for(let i = 1; i <= n; i++){
    if(visited[i])  continue;
    dfs(arr, i, visited, result, finished);
  }
  console.log(n-result.length);
}


function dfs(arr, cur, visited, result, finished) {
  visited[cur] = true; // 현재 노드 방문 처리
  let next = arr[cur]; // 다음 노드
  if(!visited[next]){
    dfs(arr, next, visited, result, finished);
  }
  // 다음 노드를 이미 방문한 적이 있고 처리 완료되지 않은 노드
  else if(!finished[next]) {
    // 사이클에 포함된 노드들을 result에 저장하는 과정
    while(next != cur) {
      result.push(next);
      next = arr[next];
    }
    result.push(cur);
  }
  finished[cur] = true; // 현재 노드를 처리 완료 표시해준다.
}

 * 
 * 
 */

/* 시간 초과 코드
for (let i = 0; i < tc * 2; i += 2) {
  const n = Number(input[i + 1]);
  const arr = [0, ...input[i + 2].split(' ').map(Number)];
  const visited = Array(n + 1).fill(false);
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (result.includes(i)) continue;
    dfs(arr, i, i, visited, result);
  }
  console.log(n - result.length);
}

function dfs(arr, start, cur, visited, result) {
  if (visited[cur] && cur === start) {
    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) result.push(i);
    }
  }
  if (!visited[cur]) {
    visited[cur] = true;
    dfs(arr, start, arr[cur], visited, result);
    visited[cur] = false;
  }
}
*/
