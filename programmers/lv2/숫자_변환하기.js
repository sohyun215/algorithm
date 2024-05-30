class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail++] = item;
  }

  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;

    return item;
  }

  size() {
    return this.tail - this.head;
  }
}

function solution(x, y, n) {
  const queue = new Queue();
  const dp = Array(1e6 + 1).fill(1e6);

  queue.enqueue([x, 0]);

  while (queue.size() > 0) {
    const [num, cnt] = queue.dequeue();
    if (num > y || dp[num] !== 1e6) continue;
    if (num === y) return cnt;

    dp[num] = cnt;
    for (const nextNum of [num + n, num * 2, num * 3]) {
      queue.enqueue([nextNum, cnt + 1]);
    }
  }

  return -1;
}
