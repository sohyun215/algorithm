class Heap {
  constructor() {
    this.items = [];
  }

  enq(item) {
    const size = this.items.push(item);
    let curIndex = size - 1;
    while (curIndex > 0) {
      let parent = parseInt((curIndex - 1) / 2);
      if (this.items[curIndex] < this.items[parent]) {
        [this.items[curIndex], this.items[parent]] = [
          this.items[parent],
          this.items[curIndex],
        ];
        curIndex = parent;
      } else break;
    }
  }

  deq() {
    const item = this.items[0];
    const lastItem = this.items.pop();
    const size = this.size();
    if (size === 0) return item;

    this.items[0] = lastItem;

    let curIndex = 0;

    while (curIndex < size) {
      let largestPriority = curIndex;
      let left = curIndex * 2 + 1;
      let right = curIndex * 2 + 2;

      if (left < size && this.items[largestPriority] >= this.items[left]) {
        largestPriority = left;
      }
      if (right < size && this.items[largestPriority] >= this.items[right]) {
        largestPriority = right;
      }

      if (curIndex === largestPriority) break;

      [this.items[curIndex], this.items[largestPriority]] = [
        this.items[largestPriority],
        this.items[curIndex],
      ];
      curIndex = largestPriority;
    }

    return item;
  }

  getItems() {
    return this.items;
  }

  size() {
    return this.items.length;
  }

  getFirst() {
    return this.items[0];
  }
}

function solution(scoville, K) {
  let answer = 0;
  const pq = new Heap();
  scoville.forEach((s) => pq.enq(s));

  while (true) {
    if (pq.getFirst() >= K) break;
    if (pq.size() === 1 && pq.getFirst() < K) {
      answer = -1;
      break;
    }
    const a = pq.deq();
    const b = pq.deq();
    pq.enq(a + b * 2);
    answer += 1;
  }
  return answer;
}
