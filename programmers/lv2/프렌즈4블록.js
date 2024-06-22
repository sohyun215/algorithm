const dx = [0, 1, 1];
const dy = [1, 0, 1];
function solution(m, n, board) {
  let answer = 0;
  for (let i = 0; i < m; i++) {
    board[i] = [...board[i]];
  }
  let deletedBlock = deleteBlock(board, m, n);
  while (deletedBlock > 0) {
    answer += deletedBlock;
    fillBlock(board, m, n);
    deletedBlock = deleteBlock(board, m, n);
  }

  return answer;
}

function fillBlock(board, row, col) {
  for (let i = 0; i < col; i++) {
    const t = [];
    for (let j = 0; j < row; j++) {
      if (board[j][i] !== ' ') {
        t.push(board[j][i]);
      }
    }
    for (let j = row - 1; j >= 0; j--) {
      if (t.length === 0) {
        board[j][i] = ' ';
        continue;
      }
      board[j][i] = t.pop();
    }
  }
}

function deleteBlock(board, row, col) {
  let deleted = 0;
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - 1; j++) {
      if (board[i][j] === ' ') continue;
      let flag = true;
      for (let k = 0; k < 3; k++) {
        const nx = j + dx[k];
        const ny = i + dy[k];
        if (board[ny][nx] !== board[i][j]) {
          flag = false;
          break;
        }
      }
      // 지울 수 있는 블록인 경우
      if (flag) {
        visited[i][j] = true;
        for (let k = 0; k < 3; k++) {
          const nx = j + dx[k];
          const ny = i + dy[k];
          visited[ny][nx] = true;
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (visited[i][j]) {
        deleted += 1;
        board[i][j] = ' ';
      }
    }
  }

  return deleted;
}
