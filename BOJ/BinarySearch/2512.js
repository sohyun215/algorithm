const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const n = Number(input[0]);
const budgetList = input[1].split(' ').map(Number);
const totalBudget = Number(input[2]);

let start = 1;
let end = budgetList.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 상한액
  let total = 0;
  for (let b of budgetList) {
    total += Math.min(mid, b);
  }
  if (total <= totalBudget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const n = Number(input[0]);
// const budgetList = input[1].split(' ').map(Number);
// const total = Number(input[2]);

// budgetList.sort((a, b) => b - a);

// let maxBudget = budgetList[0];
// let sum = budgetList.reduce((a, b) => a + b);

// while (total < sum) {
//   sum = 0;
//   for (let i = 0; i < budgetList.length; i++) {
//     if (budgetList[i] > maxBudget) {
//       sum += maxBudget;
//     } else sum += budgetList[i];
//   }
//   if (total >= sum) break;
//   maxBudget--;
// }
// console.log(maxBudget);
