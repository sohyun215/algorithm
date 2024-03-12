const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

let n = Number(input[0]);
const dist = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);

let curCost = costs[0];
let len = dist[0];
let totalPrice = 0n;

for (let i = 0; i < n - 1; i++) {
  while (i < n - 2 && curCost < costs[i + 1]) {
    len += dist[i + 1];
    i += 1;
  }
  totalPrice += BigInt(curCost * len);
  curCost = costs[i + 1];
  len = dist[i + 1];
}
console.log(totalPrice.toString());
