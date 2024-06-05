function solution(arr) {
  return compress(arr.length, arr, 0, 0);
}

function compress(n, arr, row, col) {
  let allSame = true;
  let num = arr[row][col];
  let zero = 0;
  let one = 0;

  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (num !== arr[i][j]) {
        allSame = false;
      }
    }
    if (!allSame) break;
  }

  if (!allSame) {
    for (const [i, j] of [
      [0, 0],
      [0, n / 2],
      [n / 2, 0],
      [n / 2, n / 2],
    ]) {
      const [zeroCnt, oneCnt] = compress(n / 2, arr, row + i, col + j);
      zero += zeroCnt;
      one += oneCnt;
    }
  } else {
    if (num === 0) return [1, 0];
    else return [0, 1];
  }
  return [zero, one];
}
