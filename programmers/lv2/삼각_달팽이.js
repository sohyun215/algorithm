function solution(n) {
  const answer = Array.from({ length: n }, (_, idx) => Array(idx + 1).fill(0));
  const direction = [
    [0, 1],
    [1, 0],
    [-1, -1],
  ];

  answer[0][0] = 1;
  let [x, y] = [0, 0];
  let i = 0;
  let flag = true;

  while (true) {
    const nx = x + direction[i][0];
    const ny = y + direction[i][1];

    // 범위를 벗어나거나 이미 채워진 경우 방향 변경
    if (ny >= n || nx > y || nx < 0 || ny < 0 || answer[ny][nx] !== 0) {
      if (!flag) {
        // 방향 변경해도 안되는 경우 다 채워진 경우이므로 반복문 탈출
        break;
      }

      i = (i + 1) % 3;
      flag = false;
      continue;
    }

    flag = true;
    answer[ny][nx] = answer[y][x] + 1;
    [x, y] = [nx, ny];
  }

  return answer.flat();
}
