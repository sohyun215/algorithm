class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail++] = item;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    return items[this.head];
  }

  size() {
    return this.tail - this.head;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [s, t] = input.map(Number);

if (s === t) {
  console.log(0);
  return;
}
const MAX = 1e9;
const OPERATOR = ['*', '+', '-', '/'];
const queue = new Queue();

queue.enqueue([s, '']);
const visited = new Set([s]);
let flag = false;
while (queue.size() !== 0) {
  const [cur, op] = queue.dequeue();
  if (cur === t) {
    console.log(op);
    flag = true;
    break;
  }
  if (cur > MAX || cur === 0) continue;
  for (let o of OPERATOR) {
    let result = cur;
    if (o === '*') result *= result;
    else if (o === '+') result += result;
    else if (o === '-') result = 0;
    else result = 1;
    if (!visited.has(result)) {
      queue.enqueue([result, op + o]);
      visited.add(result);
    }
  }
}
if (!flag) console.log(-1);
