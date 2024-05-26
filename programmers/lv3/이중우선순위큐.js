class PriorityQueue {
  // 최소힙
  constructor() {
    this.heap = [];
  }

  enqueue(item) {
    this.heap.push(item);
    let cur = this.heap.length - 1;

    while (cur > 0) {
      const parent = parseInt((cur - 1) / 2);
      if (this.heap[cur] < this.heap[parent]) {
        [this.heap[cur], this.heap[parent]] = [
          this.heap[parent],
          this.heap[cur],
        ];
        cur = parent;
      } else break;
    }
  }

  dequeue() {
    const item = this.heap[0];
    const last = this.heap.pop();
    const size = this.heap.length;

    if (size === 0) return item;

    this.heap[0] = last;

    let cur = 0;

    while (cur < size) {
      let largest = cur; // 우선 순위 높은 것
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;

      if (left < size && this.heap[largest] > this.heap[left]) {
        largest = left;
      }

      if (right < size && this.heap[largest] > this.heap[right]) {
        largest = right;
      }

      if (largest === cur) break;

      [this.heap[cur], this.heap[largest]] = [
        this.heap[largest],
        this.heap[cur],
      ];
      cur = largest;
    }
    return item;
  }

  // 최소힙에서 최댓값 구하기
  getMax() {
    // leaf node만 확인
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const last = this.heap.length - 1;
    const first = parseInt((last - 1) / 2) + 1;

    const leafs = this.heap.slice(first, last + 1);
    const maxValue = Math.max(...leafs);
    const maxIndex = this.heap.indexOf(maxValue);

    this.heap.splice(maxIndex, 1);

    return maxValue;
  }

  size() {
    return this.heap.length;
  }
}

function solution(operations) {
  var answer = [];
  const pq = new PriorityQueue();
  for (const operation of operations) {
    const [cmd, num] = operation.split(' ');
    if (cmd === 'I') pq.enqueue(Number(num));
    else {
      if (num === '1') pq.getMax();
      else pq.dequeue();
    }
  }

  if (pq.size() === 0) return [0, 0];
  else return [pq.getMax(), pq.dequeue()];
}
