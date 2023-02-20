// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  let danger = 0;
  const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
  const n = board.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        danger++;
        for (let k = 0; k < 8; k++) {
          let nx = j + dx[k];
          let ny = i + dy[k];
          if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
          if (board[ny][nx] === -1 || board[ny][nx] === 1) continue;
          else {
            board[ny][nx] = -1;
            danger++;
          }
        }
      }
    }
  }
  return n * n - danger;
}
