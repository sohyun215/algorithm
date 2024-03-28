class Queue {
  constructor() {
    this.headIndex = 0;
    this.tailIndex = 0;
    this.queue = {};
  }

  enqueue(element) {
    this.queue[this.tailIndex++] = element;
  }

  dequeue() {
    const item = this.queue[this.headIndex];
    delete this.queue[this.headIndex++];
    return item;
  }

  getSize() {
    return this.tailIndex - this.headIndex;
  }
}

function turn(direction, curIndex) {
  if (direction === 'L') {
    switch (curIndex) {
      case 0:
        return 2;
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
        return 0;
    }
  }
  if (direction === 'D') {
    switch (curIndex) {
      case 0:
        return 3;
      case 1:
        return 2;
      case 2:
        return 0;
      case 3:
        return 1;
    }
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

const graph = [];
const turnInfo = [];
for (let i = 0; i <= n; i++) graph.push(Array(n + 1).fill(0));

for (let i = 2; i < k + 2; i++) {
  const [row, col] = input[i].split(' ').map(Number);
  graph[row][col] = 1; // 사과의 위치
}

const l = Number(input[k + 2]);
for (let i = k + 3; i < k + 3 + l; i++) {
  const [sec, direction] = input[i].split(' ');
  turnInfo.push([Number(sec), direction]);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = new Queue();
graph[1][1] = 2;
queue.enqueue([1, 1]);

let curDirectionIndex = 3;
let curTime = 1;
let curX = 1,
  curY = 1;
let infoIndex = 0;

while (true) {
  let nx = curX + dx[curDirectionIndex];
  let ny = curY + dy[curDirectionIndex];
  if (nx > n || ny > n || nx <= 0 || ny <= 0 || graph[nx][ny] === 2) {
    break;
  }

  if (graph[nx][ny] === 0) {
    const [tx, ty] = queue.dequeue(); // 꼬리 제거
    graph[tx][ty] = 0;
  }
  graph[nx][ny] = 2;
  queue.enqueue([nx, ny]); // 머리 칸 추가

  if (infoIndex < l && curTime === turnInfo[infoIndex][0]) {
    curDirectionIndex = turn(turnInfo[infoIndex][1], curDirectionIndex);
    infoIndex += 1;
  }
  curTime += 1;
  curX = nx;
  curY = ny;
}

console.log(curTime);
