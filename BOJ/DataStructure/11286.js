class PriorityQueue {
  constructor(compareFunc) {
    this.heap = [];
    this.compare = compareFunc;
  }

  enq(item) {
    this.heap.push(item);
    let cur = this.heap.length - 1;

    while (cur > 0) {
      let parent = parseInt((cur - 1) / 2);

      if (this.compare(this.heap[cur], this.heap[parent]) >= 0) break;

      [this.heap[cur], this.heap[parent]] = [this.heap[parent], this.heap[cur]];
      cur = parent;
    }
  }

  deq() {
    const item = this.heap[0];
    const last = this.heap.pop();
    const len = this.heap.length;
    if (len === 0) return item;

    this.heap[0] = last;
    let cur = 0;

    while (cur < len) {
      let pLargest = cur;
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;

      if (
        left < len &&
        this.compare(this.heap[pLargest], this.heap[left]) > 0
      ) {
        pLargest = left;
      }

      if (
        right < len &&
        this.compare(this.heap[pLargest], this.heap[right]) > 0
      ) {
        pLargest = right;
      }

      if (cur === pLargest) break;

      [this.heap[cur], this.heap[pLargest]] = [
        this.heap[pLargest],
        this.heap[cur],
      ];
      cur = pLargest;
    }
    return item;
  }

  size() {
    return this.heap.length;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const pq = new PriorityQueue((a, b) => {
  // 절댓값이 가장 작은 값이 우선순위가 높음. 절댓값이 같을 경우 작은 값이 우선순위 높음
  if (Math.abs(a) === Math.abs(b)) return a - b;
  return Math.abs(a) - Math.abs(b);
});
let answer = '';
for (let i = 1; i <= n; i++) {
  const x = Number(input[i]);
  if (x === 0) {
    if (pq.size() === 0) answer += 0;
    else answer += pq.deq();
    answer += '\n';
  } else {
    pq.enq(x);
  }
}
console.log(answer);
