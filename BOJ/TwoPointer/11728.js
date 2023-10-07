const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const sortedArr = [];
let left = 0,
  right = 0;
while (left < n && right < m) {
  if (a[left] < b[right]) {
    sortedArr.push(a[left++]);
  } else {
    sortedArr.push(b[right++]);
  }
}
while (left < n) {
  sortedArr.push(a[left++]);
}
while (right < m) {
  sortedArr.push(b[right++]);
}

console.log(sortedArr.join(' '));

// const fs = require('fs');
// const input = fs.readFileSync('test.txt').toString().split('\n');

// const [n, m] = input[0].split(' ').map(Number);
// const a = input[1].split(' ').map(Number);
// const b = input[2].split(' ').map(Number);

// const sortedArr = new Array(n+m);
// let left = 0, right = 0;
// for (let i = 0; i < n+m; i++){
//   if (left >= n || a[left] >= b[right]){
//     sortedArr[i] = b[right++];
//   }
//   else if(right >= m || a[left] < b[right] ){
//     sortedArr[i] = a[left++];
//   }
// }
// let answer = '';
// for (let i of sortedArr)
//   answer += i +' ';
// console.log(answer);
